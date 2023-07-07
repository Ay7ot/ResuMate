import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'

export default function Language() {

    const { currentLanguage, userDispatch } = useUserDetails()

    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Language</h2> 
            
            <div className='mt-8 flex flex-col gap-3'>
                <div className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                    <i className='text-[2rem] text-[#9D9D9D]'>
                        <HiBars2 />
                    </i>
                    <div className='flex flex-col w-full'>
                        <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>Language 1</h3>
                        <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>English</h4>
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
                        <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>Language 2</h3>
                        <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>Yoruba</h4>
                        <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-4'>
                            <i><LuEdit /></i>
                            <i><RiDeleteBinLine /></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <input 
                    value={currentLanguage}
                    onChange={(e)=>{
                        userDispatch({
                            type: 'setCurrentLanguage',
                            payload: {
                                currentLanguagePayload: e.target.value
                            }
                        })
                    }}
                    type="text" 
                    placeholder='Language'
                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                />
            </div>
            <button className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add new language</p>
            </button>
        </section>
    )
}
