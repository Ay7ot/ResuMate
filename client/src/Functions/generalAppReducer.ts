import { GeneralAppActionType, GeneralAppContextType } from "../Types/GeneralAppTypes";

export function generalAppReducer(state: GeneralAppContextType, action: GeneralAppActionType){
    switch(action.type){

        case 'showNavBar':
            return {
                ...state,
                navShown: true
            }
        case 'hideNavBar':
            return {
                ...state,
                navShown: false
            }
        case 'setShowLogin':
            return {
                ...state,
                showLogin: action.payload?.showLoginPayload ?? false
            }
        case 'setShowSignup':
            return {
                ...state,
                showSignup: action.payload?.showSignupPayload ?? false
            }
        

        default:
            return state
    }
}