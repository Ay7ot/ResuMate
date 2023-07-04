import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { GeneralAppContextType } from '../Types/GeneralAppTypes'
import { useGeneralAppContext } from '../Functions/useGeneralAppContext'
import { generalAppReducer } from '../Functions/generalAppReducer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

export const GeneralAppContext = createContext<GeneralAppContextType>({
    theme: 'light',
    dispatch: ()=>{return},
    navShown: false,
    showSignup: false,
    showLogin: false,
    currentUser: null
})

export function GeneralAppProvider({children}: {children: ReactNode}){
    
    const value = useGeneralAppContext()

    const [mainstate, dispatch] = useReducer(generalAppReducer, value)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            dispatch({
                type: 'setCurrentUser',
                payload: {
                    currentUserPayload: user
                }
            })
            if(user){
                localStorage.setItem('user', JSON.stringify(user))
            }
        })
        return unsubscribe
    },[])
    
    return (
        <GeneralAppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </GeneralAppContext.Provider>
    )
}