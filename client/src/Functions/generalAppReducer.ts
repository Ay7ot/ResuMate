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
        

        default:
            return state
    }
}