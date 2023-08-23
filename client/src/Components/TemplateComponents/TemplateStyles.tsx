import html2pdf from "html2pdf.js";
import { BsDownload } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { color } from "../../Types/ColorTypes";
import { useColorContext } from "../../Functions/useColorContext";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";

export default function TemplateStyles({template}: { template: string}) {
  
  const { itemRef, resumeFont, dispatch } = useGeneralAppContext();
  const [loading, setLoading] = useState(false)
  const [colors, setColors] = useState<color[]>([])
  const [showFontBox, setShowFontBox] = useState(false)
  const { colorDispatch, currentColor, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin } = useColorContext()
  
  const  backgroundColor = `bg-${currentColor.color}`

  useEffect(()=>{
    if(template === 'Istanbul'){
      setColors(Istanbul)
      const currentColor = Istanbul.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Porto'){
      setColors(Porto)
      const currentColor = Porto.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Lisbon'){
      setColors(Lisbon)
      const currentColor = Lisbon.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Madrid'){
      setColors(Madrid)
      const currentColor = Madrid.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Kyiv'){
      setColors(Kyiv)
      const currentColor = Kyiv.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Cardiff'){
      setColors(Cardiff)
      const currentColor = Cardiff.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Milan'){
      setColors(Milan)
      const currentColor = Milan.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    } else if (template === 'Berlin'){
      setColors(Berlin)
      const currentColor = Berlin.find(colors=>colors.isActive===true)
      if(currentColor){
        colorDispatch({
          type: 'setCurrentColor',
          payload: {
            currentColorPayload: currentColor
          }
        })
      }
    }
  },[colorDispatch, template, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin])
  
  //download dunction
  async function generatePdf(){
    const toDownload = itemRef.current

    if(toDownload){
      setLoading(true)
      const opt = {
        margin:       0,
        filename:     'myfile.pdf',
        image:        { type: 'png', quality: 1 },
        html2canvas:  { scale: 2, useCORS: true },
        jsPDF:        { unit: 'in', format: [6.198, 8.77], orientation: 'portrait' }
      };

     await html2pdf().from(toDownload).set(opt).save('document.pdf')
      setLoading(false)
    }
  }
  

  function changeColor(template: string, color: string){
    if(template === 'Istanbul'){
      colorDispatch({
        type: 'setIstanbulColors',
        payload: {
          istanbulPayload : Istanbul.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Porto'){
      colorDispatch({
        type: 'setPortoColors',
        payload: {
          portoPayload : Porto.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Lisbon'){
      colorDispatch({
        type: 'setLisbonColors',
        payload: {
          lisbonPayload : Lisbon.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Madrid'){
      colorDispatch({
        type: 'setMadridColors',
        payload: {
          madridPayload : Madrid.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Kyiv'){
      colorDispatch({
        type: 'setKyivColors',
        payload: {
          kyivPayload : Kyiv.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Cardiff'){
      colorDispatch({
        type: 'setCardiffColors',
        payload: {
          cardiffPayload : Cardiff.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Milan'){
      colorDispatch({
        type: 'setMilanColors',
        payload: {
          milanPayload : Milan.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    } else if (template === 'Berlin'){
      colorDispatch({
        type: 'setBerlinColors',
        payload: {
          berlinPayload : Berlin.map(colors=>{
            if(colors.color === color){
              return {
                ...colors,
                isActive: true
              }
            } else return {
              ...colors,
              isActive: false
            }
          })
        }
      })
    }
  }

  function openandCloseFontBox(){
    setShowFontBox(prevValue=>!prevValue)
  }

  function pickFont(font: 'Public' | 'Poppins' | 'Inter' | 'Bricolage'){
    dispatch({
      type: 'setResumeFont',
      payload:{
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
            {colors.map((color, index)=>{
              const bgColor = `bg-${color.color}`
              return (
                <div key={index} className={`${color.isActive ? 'templateColor' : ''} rounded-full border-[2px] flex items-center p-[1px]`}>
                  <button onClick={()=>changeColor(template, color.color)} className={`${bgColor} rounded-full h-[15px] w-[15px] lg:h-[24px] lg:w-[24px] cursor-pointer`}>

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
              <button onClick={()=>pickFont('Public')}>Public Sans</button>
              <button onClick={()=>pickFont('Poppins')}>Poppins</button>
              <button onClick={()=>pickFont('Inter')}>Inter</button>
              <button onClick={()=>pickFont('Bricolage')}>Bricolage</button>
            </div>
          } 
        </div>
      </div>
      <button onClick={generatePdf} className={`${backgroundColor} py-3 px-4 text-white text-semibold text-[1.2rem] transition-all duration-200 ease-in rounded-md`}>{loading ? <Loader /> : <BsDownload />}</button>
    </div>
  )
}
