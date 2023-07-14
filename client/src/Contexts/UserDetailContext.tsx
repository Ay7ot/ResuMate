import { createContext, ReactNode, useReducer } from "react";
import { useUserDetails } from "../Functions/useUserDetails";
import { UserDetailContextType } from "../Types/UserTypes";
import { userReducer } from "../Functions/userReducer";
import { nanoid } from 'nanoid'

export const UserDetails = createContext<UserDetailContextType>({
    userDispatch: ()=>{return},
    firstName: '',
    lastName: '',
    profession: '',
    phoneNumber: '',
    email: '',
    country: '',
    state: '',
    professionalSummary: '',
    skills: [],
    currentSkill: '',
    awards: [],
    language: [],
    currentLanguage: '',
    workHistory: [
        {
            jobTitle: '',
            month: {
                start: '',
                end: '',
            },
            companyName: '',
            jobItems: [{
                jobDetail: '',
                id: nanoid()
            }],
            location: '',
            id: nanoid()
        }
    ],
    education: [],
    school: {
        schoolName: '',
        degree: '',
        month: {
            start: '',
            end: '',
        },
        course: '',
        location: ''
    }
})

export function UserDetailsProvider({children}: {children : ReactNode}){
    
    const value = useUserDetails() 

    const [userState, userDispatch] = useReducer(userReducer, value)
    
    console.log(userState)

    return (
        <UserDetails.Provider value={{...userState, userDispatch}}>
            {children}
        </UserDetails.Provider>
    )
}