import { GeneralAppActionType, GeneralAppContextType } from "../Types/GeneralAppTypes";

export function generalAppReducer(state: GeneralAppContextType, action: GeneralAppActionType){
    switch(action.type){

        case 'setDarkTheme':
            return {
                ...state,
                darkTheme: true
            }
        case 'setLightTheme':
            return {
                ...state,
                darkTheme: false
            }
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
        case 'setCurrentUser':
            return {
                ...state,
                currentUser: action.payload?.currentUserPayload ?? null
            }
        case 'showNoAuthModal':
            return {
                ...state,
                showSignup: false,
                showLogin: false
            }
        case 'setResumeTemplates':
            return {
                ...state,
                resumeTemplates : action.payload?.resumeTemplatesPayload ?? []
            }
        case 'setItemRef':
            return {
                ...state,
                itemRef: action.payload?.itemRefPayload ?? { current: null}
            }
        case 'setResumeFont':
            return {
                ...state,
                resumeFont: action.payload?.resumeFontPayload ?? 'Public'
            }
        default:
            return state
    }
}