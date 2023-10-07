import { createContext, ReactNode, useReducer } from "react";
import { useUserDetails } from "../Functions/useUserDetails";
import { UserDetailContextType } from "../Types/UserTypes";
import { userReducer } from "../Functions/userReducer";
import { nanoid } from 'nanoid'

export const UserDetails = createContext<UserDetailContextType>({
    resumeName: 'Untitled Resume',
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
    objectId: nanoid()
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