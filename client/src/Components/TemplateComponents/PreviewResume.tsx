// import html2pdf from "html2pdf.js"
// import { useEffect } from "react"
// import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"
import { useLocation, useNavigate } from "react-router-dom"
import Istanbul from "./TemplateItems/Istanbul"
import Porto from "./TemplateItems/Porto"
import Lisbon from "./TemplateItems/Lisbon"
import Madrid from "./TemplateItems/Madrid"
import Kyiv from "./TemplateItems/Kyiv"
import Milan from "./TemplateItems/Milan"
import Cardiff from "./TemplateItems/Cardiff"
import Berlin from "./TemplateItems/Berlin"
import TemplateStyles from "./TemplateStyles"
import { IoChevronBack } from "react-icons/io5"

export default function PreviewResume() {

    // const { itemRef } = useGeneralAppContext()

    const location = useLocation()
    const name = location.state
    //   download dunction
    // async function generatePdf(){
    //     const toDownload = itemRef.current
    //     console.log(toDownload)

    //     if(toDownload){
    //         // setLoading(true)
    //         const opt = {
    //             margin:       0,
    //             filename:     'myfile.pdf',
    //             image:        { type: 'png', quality: 1 },
    //             html2canvas:  { scale: 2, useCORS: true },
    //             jsPDF:        { unit: 'in', format: [6.198, 8.77], orientation: 'portrait' }
    //         };

           
    //         // setLoading(false)
    //         try {
    //             const blob =  await html2pdf().from(toDownload).set(opt).outputPdf('blob', 'document.pdf')
    //             console.log(blob)
    //         } catch (error){
    //             console.error(error)
    //         }
    //     }
    // }

    // useEffect(()=>{
    //     generatePdf()
    // })

    const history = useNavigate()
    
    function goBack(){
        history(-1)
    }

    return (

        <div className="min-h-screen flex flex-col items-center pt-16 px-6 bg-[#FAFAFA] pb-[5rem] w-full">
           <div className='flex justify-between w-full max-w-[400px]'>
                <button onClick={goBack} className='w-[10%] flex items-center gap-1 text-[#192657] font-medium'>
                    <i className='text-[#444444] '><IoChevronBack /></i>
                    <p>Back</p>
                </button>
                <p className='self-center px-6 py-2 border-b-[1px] border-[#9D9D9D] text-[#444444] text-lg lg:text-xl font-medium'>Untitled Resume</p>
                <div className='w-[10%] '></div>
            </div>
           <div className="scale-[58%] w-[595px] md:scale-[70%] mt-[-5rem] shadow-lg">
                {
                name === 'Istanbul' ? <Istanbul /> 
                :name === 'Porto' ? <Porto />
                :name === 'Lisbon' ? <Lisbon />
                :name === 'Madrid' ? <Madrid />
                :name === 'Kyiv' ? <Kyiv />
                :name === 'Milan' ? <Milan />
                :name === 'Cardiff' ? <Cardiff />
                :name === 'Berlin' ? <Berlin />
                : <Istanbul />
                }
           </div>
           <div className='mt-[-5rem]'>
            <TemplateStyles template={name}/>
           </div>
        </div>
    )
}
