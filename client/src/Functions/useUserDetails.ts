import { UserDetails } from "../Contexts/UserDetailContext"
import { useContext } from 'react'

export const useUserDetails = () => {
    return useContext(UserDetails)
}