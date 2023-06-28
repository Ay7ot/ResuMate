import { BsCalendar4 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'

export default function Education() {
    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Education</h2> 
            <p className='text-[#444444] text-sm lg:text-base'>Your diverse educational background gives you a unique perspective that will be an asset to the company.</p>
            
            <div className='mt-8 flex flex-col gap-3'>
                <div className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                    <i className='text-[2rem] text-[#9D9D9D]'>
                        <HiBars2 />
                    </i>
                    <div className='flex flex-col w-full'>
                        <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>Education 1</h3>
                        <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>B.sc Architecture</h4>
                        <p className='text-[#444444] text-xs md:text-sm'>Federal University of Technology Akure</p>
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
                        placeholder='School'
                        className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='Degree'
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
            <button className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more work education</p>
            </button>
        </section>
    )
}
