import { UserDetailContextType, userActionType } from "../Types/UserTypes";
import { nanoid } from 'nanoid'

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
                workHistory: action.payload?.workHistoryPayload ?? []
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
                    location: '',
                    id: nanoid()
                }
            }
        case 'setEducation':
            return {
                ...state,
                education: action.payload?.educationPayload ?? []
            }
        case 'setSchool':
            return {
                ...state,
                school: action.payload?.schoolPayload ?? {
                    schoolName: '',
                    degree: '',
                    month: {
                        start: '',
                        end: '',
                    },
                    course: '',
                    location: ''
                }
            }
        case 'setSkills':
            return {
                ...state,
                skills: action.payload?.skillsPayload ?? []
            }
        case 'setCurrentSkill':
            return {
                ...state,
                currentSkill: action.payload?.currentSkillPayload ?? ''
            }
        case 'setLanguage':
            return {
                ...state,
                language: action.payload?.languagePayload ?? []
            }
        case 'setCurrentLanguage':
            return {
                ...state,
                currentLanguage: action.payload?.currentLanguagePayload ?? ''
            }
        default:
            return state
    }
}