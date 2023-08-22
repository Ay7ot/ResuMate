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
    currentUser: null,
    itemRef: { current: null },
    resumeTemplates: [
        
        {
            name: 'Kyiv',
            image: 'Kyiv.png',
            isSelected: false
        },
        {
            name: 'Cardiff',
            image: 'Cardiff.png',
            isSelected: false
        },
        {
            name: 'Milan',
            image: 'Milan.png',
            isSelected: false
        },
        {
            name: 'Berlin',
            image: 'Berlin.png',
            isSelected: false
        }, 
        {
            name: 'Istanbul',
            image: 'Istanbul.png',
            isSelected: false
        },
        {
            name: 'Porto',
            image: 'Porto.png',
            isSelected: false
        },
        {
            name: 'Lisbon',
            image: 'Lisbon.png',
            isSelected: false
        },
        {
            name: 'Madrid',
            image: 'Madrid.png',
            isSelected: false
        }
    ]
})

export function GeneralAppProvider({ children }: { children: ReactNode }){
    
    const value = useGeneralAppContext()

    const [mainstate, dispatch] = useReducer(generalAppReducer, value)

    console.log(mainstate);
    
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