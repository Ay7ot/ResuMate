import { colorContext, colorReducerAction } from "../Types/ColorTypes";

export function colorReducer(state: colorContext, action: colorReducerAction){
    switch(action.type){
        case 'setIstanbulColors':
            return {
                ...state,
                Istanbul: action.payload?.istanbulPayload ?? []
            }
        case 'setPortoColors':
            return {
                ...state,
                Porto: action.payload?.portoPayload ?? []
            }
        case 'setLisbonColors':
            return {
                ...state,
                Lisbon: action.payload?.lisbonPayload ?? []
            }
        case 'setMadridColors':
            return {
                ...state,
                Madrid: action.payload?.madridPayload ?? []
            }
        case 'setKyivColors':
            return {
                ...state,
                Kyiv: action.payload?.kyivPayload ?? []
            }
        case 'setCardiffColors':
            return {
                ...state,
                Cardiff: action.payload?.cardiffPayload ?? []
            }
        case 'setMilanColors':
            return {
                ...state,
                Milan: action.payload?.milanPayload ?? []
            }
        case 'setBerlinColors':
            return {
                ...state,
                Berlin: action.payload?.berlinPayload ?? []
            }
        case 'setCurrentColor':
            return {
                ...state,
                currentColor: action.payload?.currentColorPayload ?? {
                    color: '',
                    id: '',
                    isActive: false
                }
            }
        default:
            return state
    }
}