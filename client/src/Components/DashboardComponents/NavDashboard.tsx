import { Link } from "react-router-dom";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
// import ThemeToggler from "../ThemeToggler";
import { useNavigate } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useRef, useState } from 'react'
import { auth } from "../../firebase";
import { useUserDetails } from "../../Functions/useUserDetails";

export default function NavDashboard() {

    const { darkTheme, currentUser } = useGeneralAppContext()
    const navref = useRef<HTMLDivElement>(null)
    const [showLogout, setShowLogout] = useState(false)
    const displayLetter = currentUser?.email?.[0].toUpperCase() || ''
    const { userDispatch } = useUserDetails()

    const navigateTo = useNavigate()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (navref.current && !navref.current.contains(event.target as Node)) {
                setShowLogout(false)
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [navref]);

    function createNewResume() {
        userDispatch({
            type: 'setNewResume'
        })

        navigateTo('/templates')
    }

    function logout() {
        auth.signOut().then(() => {
            localStorage.removeItem('user')
            navigateTo('/')
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#ffffff]'} w-full z-[999999] sticky top-0 landingShadow py-[1rem] px-8 md:px-[3rem] lg:px-[6rem] flex justify-between items-center`}>
            <Link to='/'>
                <div className="flex items-center gap-2">
                    <img src="resumateIcon.png" className="w-[25px] md:w-[30px]" />
                    <p className={`${darkTheme ? 'text-[#ffebcd]' : 'text-[#192657]'} font-bold  text-xl md:text-[1.5rem]`}>ResuMate</p>
                </div>
            </Link>
            <div className="flex items-center gap-6 relative">
                {/* <ThemeToggler /> */}
                <button onClick={createNewResume} className={`text-[#192657] hidden md:block rounded-md py-3 px-7 border-[1px] border-[#192657] newTemplateGradient font-medium duration-300 ease-in transition-colors`}>Create a new template</button>
                <div
                    className="flex items-center gap-1"
                    onClick={(e) => {
                        e.stopPropagation()
                        setShowLogout(true)
                    }}
                >
                    <div className={`${currentUser?.photoURL === null || '' ? '' : ''} gradient rounded-full h-10 w-10 flex items-center justify-center`}>
                        {currentUser?.photoURL ?
                            <img
                                src={`${currentUser.photoURL}`}
                                className="w-full rounded-full"
                            /> :
                            <p className='font-bold text-[1.3rem] text-white'>{`${displayLetter}`}</p>
                        }
                    </div>
                    <i className="mt-4"><BsChevronDown /></i>
                </div>
                {showLogout &&
                    <div ref={navref} className="absolute bg-[#f4f5fd] shadow-md rounded-md p-2 right-0 top-16 w-[200px] flex flex-col gap-4">
                        <button onClick={createNewResume} className={`text-[#192657] font-medium duration-300 ease-in transition-colors md:hidden`}>Create a new template</button>
                        <button onClick={logout} className="text-[#192657] font-medium">Logout</button>
                    </div>
                }
            </div>
        </div>
    )
}
