import { createContext, ReactNode, useReducer } from 'react'
import { GeneralAppContextType } from '../Types/GeneralAppTypes'
import { useGeneralAppContext } from '../Functions/useGeneralAppContext'
import { generalAppReducer } from '../Functions/generalAppReducer'

export const GeneralAppContext = createContext<GeneralAppContextType>({
    theme: 'light',
    dispatch: ()=>{return},
    navShown: false
})

export function GeneralAppProvider({children}: {children: ReactNode}){
    
    const value = useGeneralAppContext()

    const [mainstate, dispatch] = useReducer(generalAppReducer, value)
    
    console.log(mainstate)
    return (
        <GeneralAppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </GeneralAppContext.Provider>
    )
}