

export default function PersonalInfo(){
    return (
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
    )
}