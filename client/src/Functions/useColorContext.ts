import { useContext } from "react";
import { ColorContext } from "../Contexts/ColorContext";

export function useColorContext(){
    return useContext(ColorContext)
}