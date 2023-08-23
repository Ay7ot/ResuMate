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
import { useUserDetails } from "../../Functions/useUserDetails"

export default function PreviewResume() {

    const { resumeName, userDispatch } = useUserDetails()

    const location = useLocation()
    const name = location.state

    const history = useNavigate()
    
    function goBack(){
        history(-1)
    }

    return (

        <div className="min-h-screen flex flex-col items-center pt-16 px-6 bg-[#FAFAFA] pb-[6rem] w-full">
           <div className='flex justify-between w-full max-w-[400px]'>
                <button onClick={goBack} className='w-[10%] flex items-center gap-1 text-[#192657] font-medium'>
                    <i className='text-[#444444] '><IoChevronBack /></i>
                    <p>Back</p>
                </button>
                <input 
                    value={resumeName}
                    type='text'
                    onChange={(e)=>{
                        userDispatch({
                            type: 'setResumeName',
                            payload: {
                                resumeNamePayload: e.target.value
                            }
                        })
                    }}
                    className='max-w-[220px] bg-[#fafafa] self-center px-6 py-2 border-b-[1px] text-center border-[#9D9D9D] text-[#444444] text-lg lg:text-xl font-medium'
                />
                <div className='w-[10%] '></div>
            </div>
           <div className="scale-[57%] w-[595px] md:scale-[70%] mt-[-5rem] shadow-lg">
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
