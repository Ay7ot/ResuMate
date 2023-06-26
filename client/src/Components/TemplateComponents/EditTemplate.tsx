import { useLocation } from "react-router-dom"
import Istanbul from "./Istanbul"
import { useRef, useEffect } from "react"
import html2pdf from "html2pdf.js"
import Porto from "./Porto"
import Lisbon from "./Lisbon"
import Madrid from "./Madrid"
import TemplateDetails from "./TemplateDetails"

export default function EditTemplate() {

    const location = useLocation()
    const template = location.state

    
    const itemref = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
      window.scrollTo(0,0)
    })
    
    async function generatePdf(){


        const toDownload = itemref.current
        console.log('...is downloading')
        if(toDownload){
    
          const opt = {
            margin:       0,
            filename:     'myfile.pdf',
            image:        { type: 'png', quality: 1 },
            html2canvas:  { scale: 1, useCORS: true },
            jsPDF:        { unit: 'in', format: [6.198, 8.77], orientation: 'portrait' },
            // pagebreak: {
            //   mode: 'avoid-all'
            // },
          };
    
          html2pdf().from(toDownload).set(opt).save('document.pdf')
    
        }
        console.log('has downloaded')

    }
    
    return (
      <div className='flex lg:w-screen'>
        <div className='lg:w-[70%] pt-16 w-full px-10 md:px-24'>
          <TemplateDetails />
        </div>
        <div className='hidden lg:block bg-[#FAFAFA] min-h-[100dvh]'>
          <div className='chosenTemplate w-[595px] mt-[-8rem] mb-[-10rem]'>
            {
              template.name === 'Istanbul' ? <Istanbul itemref={itemref}/> 
              :template.name === 'Porto' ? <Porto />
              :template.name === 'Lisbon' ? <Lisbon />
              :template.name === 'Madrid' ? <Madrid itemref={itemref}/>
              : <Istanbul itemref={itemref}/>
            }
          </div>
          
          <div className='px-[7.9rem]'>
              <button onClick={generatePdf} className="mb-6 p-2 bg-blue-300 rounded-md">Download</button>
          </div>
        </div>
      </div>
    )
}
