import html2pdf from "html2pdf.js";
import { BsDownload } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { color } from "../../Types/ColorTypes";
import { useColorContext } from "../../Functions/useColorContext";

export default function TemplateStyles({itemRef, template}: {itemRef: React.MutableRefObject<HTMLDivElement | null>, template: string}) {
  
  const [loading, setLoading] = useState(false)
  const [colors, setColors] = useState<color[]>([])
  const { colorDispatch, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin } = useColorContext()
 
  useEffect(()=>{
    if(template === 'Istanbul'){
      setColors(Istanbul)
    } else if (template === 'Porto'){
      setColors(Porto)
    } else if (template === 'Lisbon'){
      setColors(Lisbon)
    } else if (template === 'Madrid'){
      setColors(Madrid)
    } else if (template === 'Kyiv'){
      setColors(Kyiv)
    } else if (template === 'Cardiff'){
      setColors(Cardiff)
    } else if (template === 'Milan'){
      setColors(Milan)
    } else if (template === 'Berlin'){
      setColors(Berlin)
    }
  },[template, Istanbul, Porto, Lisbon, Madrid, Kyiv, Cardiff, Milan, Berlin])
  
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


  return (
    <div className='px-[7.9rem] flex justify-between items-center gap-6'>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-[#444444] font-medium">Color:</h3>
          <div className="flex items-center gap-2">
            {colors.map((color, index)=>{
              return (
                <div key={index} className={`${color.isActive ? 'templateColor' : ''} rounded-full border-[2px] p-[1px]`}>
                  <div onClick={()=>changeColor(template, color.color)} className={`${color.color} rounded-full h-[24px] w-[24px] cursor-pointer`}>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h3 className="text-[#444444] font-medium">Text:</h3>
          <div className="border-b-[1px] border-[#9D9D9D] w-full flex justify-between">
            <p className="text-[#9D9D9D]">Public Sans</p>
            <button><BiChevronDown /></button>
          </div> 
        </div>
      </div>
      <button onClick={generatePdf} className="py-3 px-4 bg-[#192657] text-white text-semibold text-[1.2rem] rounded-md">{loading ? <Loader /> : <BsDownload />}</button>
    </div>
  )
}
