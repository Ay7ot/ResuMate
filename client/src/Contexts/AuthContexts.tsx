import { ReactNode, createContext, useReducer } from "react";
import { AuthContextType } from "../Types/AuthTypes";
import { useAuthContext } from "../Functions/useAuthContext";
import { authReducer } from "../Functions/authReducer";

export const AuthContext = createContext<AuthContextType>({
    email: '',
    password: '',
    passwordConfirm: '',
    authDispatch: ()=>{return},
    errorMessage: {
        type: null,
        message: ''
    }
})

export const AuthProvider = ({children}: {children: ReactNode}) => {

    const value = useAuthContext()

    const [authState, authDispatch] = useReducer(authReducer, value)

    return (
        <AuthContext.Provider value ={{...authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}