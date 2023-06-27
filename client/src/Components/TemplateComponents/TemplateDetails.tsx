import {IoChevronBack} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import { BsCalendar4 } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa'

export default function TemplateDetails() {
    
    const history = useNavigate()
    
    function goBack(){
        history(-1)
    }
    
    return (
        <div>
            <div className='flex items-center justify-between'>
                <button onClick={goBack} className='w-[10%] flex items-center gap-1 text-[#192657] font-medium'>
                    <i className='text-[#444444] '><IoChevronBack /></i>
                    <p>Back</p>
                </button>
                <p className='self-center px-6 py-2 border-b-[1px] border-[#9D9D9D] text-[#444444] text-lg lg:text-xl font-medium'>Untitled Resume</p>
                <div className='w-[10%] '></div>
            </div>

            <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Personal Details</h2>
                <div className='mt-8 grid grid-cols-2 gap-6'>
                    <input 
                        type="text" 
                        placeholder='First Name'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='Last Name'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='Profession'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='Phone Number'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="email" 
                        placeholder='Email'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='Country'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                    <input 
                        type="text" 
                        placeholder='State/City'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                </div>
            </section>

            <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Professional Summary</h2>
                <p className='text-[#444444] text-sm md:text-base'>Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest achievements, best qualities and skills.</p>
                <div className='mt-8 bg-[#fafafa] px-3 md:px-6 py-4'>
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
            </section>

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

            <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Education</h2> 
                <p className='text-[#444444] text-sm lg:text-base'>Your diverse educational background gives you a unique perspective that will be an asset to the company.</p>
                <div className='mt-8 '>
                    <div className='grid grid-cols-2 gap-6'>
                        <input 
                            type="text" 
                            placeholder='School'
                            className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        />
                        <input 
                            type="text" 
                            placeholder='Degree'
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
                <div className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                    <FaPlus />
                    <p>add more work education</p>
                </div>
            </section>

            <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Skills</h2> 
                <p className='text-[#444444] text-sm lg:text-base'>Choose atleast 5 skills that shows that you are fit for the position</p>
                <div className='mt-8'>
                    <input 
                        type="text" 
                        placeholder='Skill'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                </div>
                <div className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                    <FaPlus />
                    <p>add more skill</p>
                </div>
            </section>

            <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Language</h2> 
                <div className='mt-8'>
                    <input 
                        type="text" 
                        placeholder='Language'
                        className='outline-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                    />
                </div>
                <div className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                    <FaPlus />
                    <p>add new language</p>
                </div>
            </section>

            <button className='py-3 px-7 flex items-center text-[#192657] border-[1px] border-[#192657] rounded-md mt-[60px] justify-center'>
                <FaPlus />
                <p>Add Section</p>
            </button>
        </div>
    )
}