import html2pdf from "html2pdf.js";
import {BsDownload} from 'react-icons/bs'
import {BiChevronDown} from 'react-icons/bi'
import { useEffect, useState } from "react";
import { useUserDetails } from "../../Functions/useUserDetails";
import Loader from "../Loader";

export default function TemplateStyles({itemRef, template}: {itemRef: React.MutableRefObject<HTMLDivElement | null>, template: string}) {
  
  const [loading, setLoading] = useState(false)

  const {colors} = useUserDetails()

  useEffect(()=>{
    const allFalse = colors.every(color=>color.isActive===false)
    console.log(allFalse)

  },[template, colors])

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
    console.log('has downloaded')
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
                  <div className={`${color.color} rounded-full h-[24px] w-[24px]`}>

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
