import { useNavigate } from "react-router-dom";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import DashboardBody from "./DashboardBody";
import NavDashboard from "./NavDashboard";
import { useEffect } from "react";

export default function Dashboard() {

    const { darkTheme, currentUser} = useGeneralAppContext()

    const navigateTo= useNavigate()
    useEffect(() => {
        if (!currentUser) {
            return navigateTo('/')
        }
    },[currentUser, navigateTo])

    return (
        <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#ffffff]'} dynamicHeight pb-[5rem]`}>
            <NavDashboard />
            <DashboardBody />
        </div>
    )
}
