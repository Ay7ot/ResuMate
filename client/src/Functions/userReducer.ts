import { UserDetailContextType, userActionType } from "../Types/UserTypes";

export function userReducer(state: UserDetailContextType, action: userActionType){
    switch(action.type){
        case 'setFirstName':
            return {
                ...state,
                firstName: action.payload?.firstNamePayload ?? ''
            }
        case 'setLastName':
            return {
                ...state,
                lastName: action.payload?.lastNamePayload ?? ''
            }
        case 'setProfession':
            return {
                ...state,
                profession: action.payload?.professionPayload ?? ''
            }
        case 'setPhone':
            return {
                ...state,
                phoneNumber: action.payload?.phoneNumberPayload ?? ''
            }
        case 'setEmail':
            return {
                ...state, 
                email: action.payload?.emailPayload ?? ''
            }
        case 'setCountry':
            return {
                ...state,
                country: action.payload?.countryPayload ?? ''
            }
        case 'setState':
            return {
                ...state,
                state: action.payload?.statePayload ?? ''
            }
        case 'setProfessionalSummary':
            return {
                ...state,
                professionalSummary: action.payload?.professionalSummaryPayload ?? ''
            }
        case 'setWorkHistory':
            return {
                ...state,
                workHistory: [
                    ...state.workHistory,
                    ...action.payload?.workHistoryPayload ?? []
                ]
            }
        case 'setWork':
            return {
                ...state,
                work: action.payload?.workPayload ?? {
                    jobTitle: '',
                    month: {
                        start: '',
                        end: '',
                    },
                    companyName: '',
                    jobItems: [],
                    location: ''
                }
            }
        default:
            return state
    }
}