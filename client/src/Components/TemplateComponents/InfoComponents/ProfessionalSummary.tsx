import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import { useUserDetails } from '../../../Functions/useUserDetails'
import { useGeneralAppContext } from '../../../Functions/useGeneralAppContext'

export default function ProfessionalSummary() {

  const {professionalSummary, userDispatch} = useUserDetails()
  const { darkTheme } = useGeneralAppContext();

  return (
    <section className='mt-[3rem]'>
        <h2 className={`text-[1.5rem] lg:text-[1.8rem] font-medium ${darkTheme ? "text-[#ffebcd]" : "text-[#192657]"} `}>Professional Summary</h2>
        <p className={`${darkTheme ? 'text-[#f9f9f9]':'text-[#333333]'}  text-sm md:text-base`}>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
        <div className={`mt-8 ${darkTheme ? 'bg-[#1a1a1a] text-[#ffebcd]' : 'bg-[#fafafa] text-[#192657]'} px-3 md:px-6 py-4`}>
            <div className='flex gap-3'>
              <i><FiBold /></i>
              <i><FiItalic /></i>
              <i><FiUnderline /></i>
            </div>
            <hr className='mt-3 border-[#C4C4C4] border-t-[1px]'/>
            <textarea 
              value={professionalSummary}
              onChange={(e)=>{
                userDispatch({
                  type: 'setProfessionalSummary',
                  payload: {
                    professionalSummaryPayload: e.target.value
                  }
                })
              }}
              className={`outline-none rounded-none  font-bold placeholder:font-normal w-full text-sm md:text-base ${darkTheme ? 'bg-[#1a1a1a]' : 'bg-[#fafafa] placeholder:text-[#444444]'} placeholder:italic mt-3`}
              rows={6}
              placeholder='e.g. I am a highly motivated and experienced web developer with a knack for learning new things ...'
            />
        </div>
    </section>
  )
}
