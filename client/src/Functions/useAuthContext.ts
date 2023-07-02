import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContexts";

export function useAuthContext(){
    return useContext(AuthContext)
}