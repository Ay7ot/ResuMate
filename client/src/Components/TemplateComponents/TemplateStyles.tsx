import html2pdf from "html2pdf.js";
import { BsDownload } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { color } from "../../Types/ColorTypes";
import { useColorContext } from "../../Functions/useColorContext";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import { useUserDetails } from "../../Functions/useUserDetails";
import axios from 'axios'
import * as htmlToImage from 'html-to-image';

export default function TemplateStyles({ template }: { template: string }) {

  const { itemRef, resumeFont, dispatch } = useGeneralAppContext();
  const { currentUser } = useGeneralAppContext()
  const [loading, setLoading] = useState(false)
  const [colors, setColors] = useState<color[]>([])
  const [showFontBox, setShowFontBox] = useState(false)
  const { colorDispatch, currentColor, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin } = useColorContext()
  const { resumeName, firstName, lastName, workHistory, profession, phoneNumber, professionalSummary, country, state, email, skills, education, languages, objectId } = useUserDetails()

  const backgroundColor = `bg-${currentColor.color}`

  useEffect(() => {
    const templates: { [key: string]: color[] } = {
      Istanbul,
      Porto,
      Lisbon,
      Madrid,
      Kyiv,
      Cardiff,
      Milan,
      Berlin,
    };

    if (template in templates) {
      const currentColors = templates[template].find((colors) => colors.isActive === true);
      if (currentColors) {
        setColors(templates[template]);
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColors,
          },
        });
      }
    }


  }, [colorDispatch, template, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin])

  async function sendUserDetailstoServer(imageUrl: string) {
    const data = {
      "resumeName": resumeName,
      "firebaseUid": currentUser?.uid,
      'firstName': firstName,
      'lastName': lastName,
      'profession': profession,
      'workHistory': workHistory,
      "education": education,
      'phoneNumber': phoneNumber,
      'professionalSummary': professionalSummary,
      'country': country,
      'state': state,
      'email': email,
      'skills': skills.map(skill => {
        return {
          skill: skill.skill,
          id: skill.id
        }
      }),
      'languages': languages.map(language => {
        return {
          language: language.language,
          id: language.id
        }
      }),
      'objectId': objectId,
      'imageUrl': imageUrl
    }

    try {
      await axios.post('http://localhost:3000/userResume/resume', data)
    } catch (err) {
      console.error(err)
    }
  }

  //download dunction
  async function generatePdf() {

    const toDownload = itemRef.current;

    if (toDownload) {
      const opt = {
        margin: 0,
        filename: 'myfile.pdf',
        image: { type: 'png', quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: [6.198, 8.77], orientation: 'portrait' }
      };

      const fileName = resumeName !== 'Untitled Resume' && resumeName || 'Untitled_Resume';

      await htmlToImage.toJpeg(toDownload, { quality: 0.1 })
        .then(function (dataUrl) {
          console.log(dataUrl)
          sendUserDetailstoServer(dataUrl);
          axios.post(`${import.meta.env.VITE_SERVER_URL}image/upload-image/${objectId}`, {
            path: dataUrl
          })
        })
        .catch(function (error) {
          console.error('oops, something went wrong!', error);
        });

      await html2pdf().from(toDownload).set(opt).save(`${fileName}.pdf`);
    }
    setLoading(false);
  }



  function changeColor(template: string, color: string) {
    const cityKey = `set${template}Colors`;
    const payloadKey = `${template.toLowerCase()}Payload`;
    const templates: { [key: string]: color[] } = {
      Istanbul,
      Porto,
      Lisbon,
      Madrid,
      Kyiv,
      Cardiff,
      Milan,
      Berlin,
    };

    const updatedColors = templates[template].map((cityColor) => ({
      ...cityColor,
      isActive: cityColor.color === color,
    }));

    const payload = {
      [payloadKey]: updatedColors,
    };

    colorDispatch({
      type: cityKey,
      payload,
    });
  }


  function openandCloseFontBox() {
    setShowFontBox(prevValue => !prevValue)
  }

  function pickFont(font: 'Public' | 'Poppins' | 'Inter' | 'Bricolage') {
    dispatch({
      type: 'setResumeFont',
      payload: {
        resumeFontPayload: font
      }
    })
    setShowFontBox(false)
  }


  return (
    <div className='lg:px-[7.9rem] px-[2rem] flex justify-between items-center gap-6'>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-[#444444] font-medium">Color:</h3>
          <div className="flex items-center gap-2">
            {colors.map((color, index) => {
              const bgColor = `bg-${color.color}`
              return (
                <div key={index} className={`${color.isActive ? 'templateColor' : ''} rounded-full border-[2px] flex items-center p-[1px]`}>
                  <button onClick={() => changeColor(template, color.color)} className={`${bgColor} rounded-full h-[15px] w-[15px] lg:h-[24px] lg:w-[24px] cursor-pointer`}>

                  </button>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-4 relative">
          <h3 className="text-[#444444] font-medium">Text:</h3>
          <div onClick={openandCloseFontBox} className="border-b-[1px] border-[#9D9D9D] w-full flex justify-between">
            <p className="text-[#9D9D9D]">{`${resumeFont}`}</p>
            <button><BiChevronDown /></button>
          </div>
          {
            showFontBox &&
            <div className={`z-[9999] absolute bottom-8 flex flex-col gap-2 items-start p-2 w-[77%] lg:w-[82%] text-white font-semibold left-[3.2rem] ${backgroundColor} rounded-lg shadow-xl`}>
              <button onClick={() => pickFont('Public')}>Public Sans</button>
              <button onClick={() => pickFont('Poppins')}>Poppins</button>
              <button onClick={() => pickFont('Inter')}>Inter</button>
              <button onClick={() => pickFont('Bricolage')}>Bricolage</button>
            </div>
          }
        </div>
      </div>
      <button onClick={generatePdf} className={`${backgroundColor} py-3 px-4 text-white text-semibold text-[1.2rem] transition-all duration-200 ease-in rounded-md`}>{loading ? <Loader /> : <BsDownload />}</button>
    </div>
  )
}
