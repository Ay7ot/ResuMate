import { AuthActionType, AuthContextType } from "../Types/AuthTypes";

export function authReducer(state: AuthContextType, action: AuthActionType){
    switch(action.type){

        case 'setEmail':
            return {
                ...state,
                email: action.payload?.emailPayload ?? ''
            }
        case 'setPassword':
            return {
                ...state,
                password: action.payload?.passwordPayload ?? ''
            }
        case 'setPasswordConfirm':
            return {
                ...state,
                passwordConfirm: action.payload?.passwordConfirmPayload ?? ''
            }
        case 'setEmailEmptyErrorMessage':
            return {
                ...state,
                errorMessage: action.payload?.errorMessagePayload ?? {
                    type: null,
                    message: ''
                } 
            }
        case 'setPasswordEmptyErrorMessage':
            return {
                ...state,
                errorMessage: action.payload?.errorMessagePayload ?? {
                    type: null,
                    message: ''
                } 
            }
        case 'setPasswordConfirmEmptyErrorMessage':
            return {
                ...state,
                errorMessage: action.payload?.errorMessagePayload ?? {
                    type: null,
                    message: ''
                } 
            }
        case 'setNoErrorMessage':
            return {
                ...state,
                errorMessage: {
                    type: null,
                    message: ''
                }
            }
    default:
            return state
    }
}