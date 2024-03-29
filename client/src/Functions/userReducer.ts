import { UserDetailContextType, userActionType } from "../Types/UserTypes";
import { nanoid } from 'nanoid'

export function userReducer(state: UserDetailContextType, action: userActionType){
    switch(action.type){
        case 'setResumeName':
            return {
                ...state,
                resumeName: action.payload?.resumeNamePayload ?? ''
            }
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
        case 'setEducation':
            return {
                ...state,
                education: action.payload?.educationPayload ?? []
            }
        case 'setSkills':
            return {
                ...state,
                skills: action.payload?.skillsPayload ?? []
            }
        case 'setLanguages':
            return {
                ...state,
                languages: action.payload?.languagesPayload ?? []
            }
        case 'setObjectId':
            return {
                ...state,
                objectId: action.payload?.objectIdPayload ?? ''
            }
        case 'setNewResume':
            return {
                ...state,
                resumeName: 'Untitled Resume',
                userDispatch: ()=>{return},
                firstName: '',
                lastName: '',
                profession: '',
                phoneNumber: '',
                email: '',
                country: '',
                state: '',
                professionalSummary: '',
                skills: [{
                    skill: '',
                    id: nanoid(),
                    isShowing: true
                }],
                languages: [{
                    language: '',
                    id: nanoid(),
                    isShowing: true
                }],
                workHistory: [
                    {
                        jobTitle: '',
                        month: {
                            start: '',
                            end: '',
                        },
                        companyName: '',
                        jobItems: [{
                            jobDetail: '',
                            id: nanoid()
                        }],
                        location: '',
                        id: nanoid(),
                        isShowing: true
                    }
                ],
                education: [
                    {
                        schoolName: '',
                        degree: '',
                        month: {
                            start: '',
                            end: '',
                        },
                        course: '',
                        location: '',
                        id: nanoid(),
                        isShowing: true
                    }
                ],
                objectId: nanoid()
            }
        default:
            return state
    }
}