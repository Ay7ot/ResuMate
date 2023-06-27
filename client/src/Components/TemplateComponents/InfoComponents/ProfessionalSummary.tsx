import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'

export default function ProfessionalSummary() {
  return (
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
  )
}
