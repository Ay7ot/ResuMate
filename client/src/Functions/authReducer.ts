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
    default:
            return state
    }
}