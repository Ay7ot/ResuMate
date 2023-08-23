import { useUserDetails } from "../../../Functions/useUserDetails"


export default function PersonalInfo(){

    const { userDispatch, firstName, lastName, profession, phoneNumber, email, country, state, } = useUserDetails()
    
    return (
        <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Personal Details</h2>
                <div className='mt-8 grid grid-cols-2 gap-6'>
                    <input 
                        type="text"
                        value={firstName} 
                        placeholder='First Name'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setFirstName',
                                payload: {
                                    firstNamePayload: e.target.value                                        
                                }
                            })
                        }}
                    />
                    <input 
                        type="text"
                        value={lastName} 
                        placeholder='Last Name'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setLastName',
                                payload: {
                                    lastNamePayload: e.target.value
                                }
                            })
                        }}
                    />
                    <input 
                        type="text"
                        value={profession} 
                        placeholder='Profession'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setProfession',
                                payload: {
                                    professionPayload: e.target.value
                                }
                            }) 
                        }}
                    />
                    <input 
                        type="text"
                        value={phoneNumber} 
                        placeholder='Phone Number'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setPhone',
                                payload: {
                                    phoneNumberPayload: e.target.value
                                }
                            })
                        }}
                    />
                    <input 
                        type="email" 
                        value={email}
                        placeholder='Email'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setEmail',
                                payload: {
                                    emailPayload: e.target.value
                                }
                            })
                        }}
                    />
                    <input 
                        type="text"
                        value={state} 
                        placeholder='State/City'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setState',
                                payload: {
                                    statePayload: e.target.value
                                }
                            })
                        }}
                    />
                    <input 
                        type="text"
                        value={country} 
                        placeholder='Country'
                        className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                        onChange={(e)=>{
                            userDispatch({
                                type: 'setCountry',
                                payload: {
                                    countryPayload: e.target.value
                                }
                            })
                        }}
                    />
                </div>
            </section>
    )
}