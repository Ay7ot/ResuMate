import { FaPlus } from 'react-icons/fa'

export default function Language() {
    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Language</h2> 
            <div className='mt-8'>
                <input 
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
