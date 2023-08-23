import { useState } from "react"
import { useUserDetails } from "../../../Functions/useUserDetails"


export default function PersonalInfo(){

    const { userDispatch, firstName, lastName, profession, phoneNumber, email, country, state, } = useUserDetails()
    
    const [shownDetails, setShownDetails] = useState({
        firstName: false,
        lastName: false,
        profession: false,
        phoneNumber: false,
        email: false,
        country: false,
        state: false
    })
    
    return (
        <section className='mt-[3rem]'>
                <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Personal Details</h2>
                <div className='mt-8 grid grid-cols-2 gap-6'>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.firstName ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>FirstName</p>
                        <input 
                            type="text"
                            value={firstName} 
                            placeholder='First Name'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        firstName: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setFirstName',
                                    payload: {
                                        firstNamePayload: e.target.value                                        
                                    }
                                })
                            }}
                        />
                    </div>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.lastName ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>LastName</p>
                        <input 
                            type="text"
                            value={lastName} 
                            placeholder='Last Name'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        lastName: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setLastName',
                                    payload: {
                                        lastNamePayload: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                   <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.profession ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>Profession</p>
                        <input 
                            type="text"
                            value={profession} 
                            placeholder='Profession'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        profession: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setProfession',
                                    payload: {
                                        professionPayload: e.target.value
                                    }
                                }) 
                            }}
                        />
                   </div>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.phoneNumber ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>Phone Number</p>
                        <input 
                            type="text"
                            value={phoneNumber} 
                            placeholder='Phone Number'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        phoneNumber: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setPhone',
                                    payload: {
                                        phoneNumberPayload: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.email ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>Email</p>
                        <input 
                            type="email" 
                            value={email}
                            placeholder='Email'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        email: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setEmail',
                                    payload: {
                                        emailPayload: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.state ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>State/City</p>
                        <input 
                            type="text"
                            value={state} 
                            placeholder='State/City'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        state: true
                                    }
                                })
                            }}
                            onChange={(e)=>{
                                userDispatch({
                                    type: 'setState',
                                    payload: {
                                        statePayload: e.target.value
                                    }
                                })
                            }}
                        />
                    </div>
                    <div>
                        <p className={`text-[#192657] text-sm ${shownDetails.country ? 'block transition-opacity duration-200 ease-in opacity-100' : 'invisible opacity-0'}`}>Country</p>
                        <input 
                            type="text"
                            value={country} 
                            placeholder='Country'
                            className='outline-none w-full rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                            onClick={()=>{
                                setShownDetails(prevDetails=>{
                                    return {
                                        ...prevDetails,
                                        country: true
                                    }
                                })
                            }}
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
                </div>
            </section>
    )
}