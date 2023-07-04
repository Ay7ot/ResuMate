import { createContext, ReactNode, useReducer } from "react";
import { useUserDetails } from "../Functions/useUserDetails";
import { UserDetailContextType } from "../Types/UserTypes";
import { userReducer } from "../Functions/userReducer";

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
    awards: [],
    language: [],
    workHistory: [],
    education: []
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