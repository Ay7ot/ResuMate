import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import { BsCalendar4 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'

export default function WorkHistory() {
  return (
    <section className='mt-[3rem]'>
        <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Work History</h2>
        <p className='text-[#444444] text-sm lg:text-base'>Show your relevant work experience</p>
        <div className='mt-8 flex flex-col gap-3'>
            <div className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                <i className='text-[2rem] text-[#9D9D9D]'>
                    <HiBars2 />
                </i>
                <div className='flex flex-col w-full'>
                    <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>Work History 1</h3>
                    <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>Product Designer at Cowrywise</h4>
                    <ul className='list-disc text-[#444444] text-xs md:text-sm'>
                        <li className='ml-4'>Brainstormed with peers and other members of design team to determine enhancements and product features Managed multiple projects effectively in demanding envir......</li>
                    </ul>
                    <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-4'>
                        <i><LuEdit /></i>
                        <i><RiDeleteBinLine /></i>
                    </div>
                </div>
            </div>
            <div className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                <i className='text-[2rem] text-[#9D9D9D]'>
                    <HiBars2 />
                </i>
                <div className='flex flex-col w-full'>
                    <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>Work History 1</h3>
                    <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>Product Designer at Cowrywise</h4>
                    <ul className='list-disc text-[#444444] text-xs md:text-sm'>
                        <li className='ml-4'>Brainstormed with peers and other members of design team to determine enhancements and product features Managed multiple projects effectively in demanding envir......</li>
                    </ul>
                    <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-4'>
                        <i><LuEdit /></i>
                        <i><RiDeleteBinLine /></i>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-8 '>
            <div className='grid grid-cols-2 gap-6'>
                <input 
                    type="text" 
                    placeholder='Job Title'
                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                />
                <input 
                    type="text" 
                    placeholder='Company Name'
                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
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
                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
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
                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] w-full text-sm md:text-base bg-[#FAFAFA] placeholder:italic mt-3'
                    rows={6}
                    placeholder='e.g. I am a highly motivated and experienced language model with a knack for learning new things ...'
                />
            </div>
        </div>
        <button className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
            <FaPlus />
            <p>add more work history</p>
        </button>
    </section>

  )
}
