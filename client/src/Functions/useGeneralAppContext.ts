import {useContext} from 'react'
import { GeneralAppContext } from "../Contexts/GeneralAppContext";

export function useGeneralAppContext(){
    return useContext(GeneralAppContext)
}