 import {IoChevronBack} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
// import { FaPlus } from 'react-icons/fa'
import PersonalInfo from './InfoComponents/PersonalInfo'
import ProfessionalSummary from './InfoComponents/ProfessionalSummary'
import WorkHistory from './InfoComponents/WorkHistory'
import Education from './InfoComponents/Education'
import Language from './InfoComponents/Language'
import Skill from './InfoComponents/Skill'
import { useUserDetails } from '../../Functions/useUserDetails'
import { useGeneralAppContext } from '../../Functions/useGeneralAppContext'

export default function TemplateDetails() {
    
    const {resumeName, userDispatch} = useUserDetails();
    const { darkTheme } = useGeneralAppContext();

    const history = useNavigate()
    
    function goBack(){
        history(-1)
    }
    
    return (
        <div className="grid place-content-center max-w-[600px] mx-auto">
            <div className='flex justify-between w-full'>
                <button onClick={goBack} className={`w-[10%] flex items-center gap-1 ${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} font-medium`}>
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
                    className={`max-w-[220px] self-center text-center px-6 py-2 border-b-[1px] border-[#9D9D9D]  ${darkTheme ? 'bg-[#121212] text-[#ffffff]' : 'bg-[#ffffff] text-[#444444]'} text-lg lg:text-xl font-medium`}
                />
                <div className='w-[10%] '></div>
            </div>
            <PersonalInfo />
            <ProfessionalSummary />
            <WorkHistory />
            <Education />
            <Skill />
            <Language />
            {/* <button className='py-3 px-7 flex items-center text-[#192657] border-[1px] border-[#192657] rounded-md mt-[60px] justify-center'>
                <FaPlus />
                <p>Add Section</p>
            </button> */}
        </div>
    )
}