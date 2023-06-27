import { BsCalendar4 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

export default function Education() {
    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Education</h2> 
            <p className='text-[#444444] text-sm lg:text-base'>Your diverse educational background gives you a unique perspective that will be an asset to the company.</p>
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
            <div className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more work education</p>
            </div>
        </section>
    )
}
