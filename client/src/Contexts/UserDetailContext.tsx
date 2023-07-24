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
    skills: [{
        skill: '',
        id: nanoid(),
        isShowing: true
    }],
    languages: [{
        language: '',
        id: nanoid(),
        isShowing: true
    }],
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
            id: nanoid(),
            isShowing: true
        }
    ],
    education: [
        {
            schoolName: '',
            degree: '',
            month: {
                start: '',
                end: '',
            },
            course: '',
            location: '',
            id: nanoid(),
            isShowing: true
        }
    ],
    colors: [
        {
            color: 'bg-[#00AB44]',
            isActive: false,
            id: nanoid()
        },
        {
            color: 'bg-[#FF3D00]',
            isActive: false,
            id: nanoid()
        },
        {
            color: 'bg-[#9747FF]',
            isActive: false,
            id: nanoid()
        },
        {
            color: 'bg-[#FFC107]',
            isActive: false,
            id: nanoid()
        },
        {
            color: 'bg-[#666666]',
            isActive: false,
            id: nanoid()
        },
        {
            color: 'bg-[#1976D2]',
            isActive: false,
            id: nanoid()
        }
    ],
    currentColor: ''
})

export function UserDetailsProvider({children}: {children : ReactNode}){
    
    const value = useUserDetails() 

    const [userState, userDispatch] = useReducer(userReducer, value)

    return (
        <UserDetails.Provider value={{...userState, userDispatch}}>
            {children}
        </UserDetails.Provider>
    )
}