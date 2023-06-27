import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import { BsCalendar4 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

export default function WorkHistory() {
  return (
    <section className='mt-[3rem]'>
        <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Work History</h2>
        <p className='text-[#444444] text-sm lg:text-base'>Show your relevant work experience</p>
        <div className='mt-8 '>
            <div className='grid grid-cols-2 gap-6'>
                <input 
                    type="text" 
                    placeholder='Job Title'
                    className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                />
                <input 
                    type="text" 
                    placeholder='Employer'
                    className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                />
            </div>
            <div className='grid grid-cols-2 gap-6 mt-6'>
                <div className='grid grid-cols-2 gap-6'>
                    <div className='text-[14px] text-[#444444] gap-2 py-2 border-b-[1px] flex items-center border-[#444444]'>
                        <BsCalendar4 />
                        <p>Start</p>
                    </div>
                    <div className='text-[14px] text-[#444444] gap-2 py-2 border-b-[1px] flex items-center border-[#444444]'>
                        <BsCalendar4 />
                        <p>End Date</p>
                    </div>
                </div>
                <input 
                    type="text" 
                    placeholder='Location'
                    className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                />
            </div>
        </div>
        <div className='mt-6'>
            <h3 className='text-[#444444] text-[14px] font-medium'>Description</h3>
            <div className='mt-2 bg-[#fafafa] px-3 md:px-6 py-4'>
                <div className='flex gap-3'>
                    <i><FiBold /></i>
                    <i><FiItalic /></i>
                    <i><FiUnderline /></i>
                </div>
                <hr className='mt-3 border-[#C4C4C4] border-t-[1px]'/>
                <textarea 
                    className='outline-none text-[#444444] placeholder:text-[#444444] w-full text-sm md:text-base bg-[#FAFAFA] placeholder:italic mt-3'
                    rows={6}
                    placeholder='e.g. I am a highly motivated and experienced language model with a knack for learning new things ...'
                />
            </div>
        </div>
        <div className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
            <FaPlus />
            <p>add more work history</p>
        </div>
    </section>

  )
}
