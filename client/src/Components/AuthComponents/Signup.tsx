import { RxCross1 } from "react-icons/rx";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {

    const { dispatch, showSignup} = useGeneralAppContext()
    const [emailShown, setEmailShown] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    function showEmail(){
        setEmailShown(true)
    }

    function showPassword(){
        setPasswordShown(true)
    }

    function setPasswordShowConfirm(){
        setShowConfirm(true)
    }
    
    const navigateTo = useNavigate()


    function hideSignupPage(){
        dispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: false
            }
        })
    }

    function showLoginPage(){
        dispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: true
            }
        })
        hideSignupPage()
        
    }

    const signupUser = () => {

        setTimeout(()=>{
           navigateTo('/templates')
        },1000)
    }

    return (
        <>
        {showSignup && 
        <div className="absolute md:rounded-md flex flex-col justify-between top-0 md:left-[15%] lg:left-[25%] bg-white p-6 md:px-10 md:w-[70%] lg:w-[50%] w-full z-[999999999] min-h-[100dvh]">
            <div>
                <div className="flex items-center  md:px-3 justify-between">
                    <div></div>
                    <div className="flex items-center gap-2">
                        <img 
                            src="resumateIcon.png"
                        />
                        <p className="text-[#192657] font-bold  text-lg md:text-[1.3rem]">ResuMate</p>
                    </div>
                    <i className='self-end text-[1.9rem]' onClick={hideSignupPage}><RxCross1 /></i>
                </div>
                <hr  className="mt-6"/>
                <h2 className="text-center mt-9 text-[#192657] text-[1.5rem] font-semibold">Sign up to Create Resume</h2>
                <form onSubmit={(e)=>{e.preventDefault(); signupUser()}} className="flex flex-col gap-3 mt-6">
                    <p className={`text-[#192657] text-sm ${emailShown ? 'block' : 'hidden'}`}>Email Address</p>
                    <input 
                        type="email"
                        className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                        placeholder="Email"
                        onClick={showEmail}
                    />

                    <p className={`text-[#192657] text-sm ${showConfirm ? 'block' : 'hidden'}`}>Password</p>
                    <input 
                        type="password"
                        className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                        placeholder="Password"
                        onClick={setPasswordShowConfirm}
                    />

                    <p className={`text-[#192657] text-sm ${passwordShown ? 'block' : 'hidden'}`}>Confirm Password</p>
                    <input 
                        type="password"
                        className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                        placeholder="Password"
                        onClick={showPassword}
                    />
                    <button className="z-[99999] mt-14 md:mt-6 w-full text-center py-4 rounded-md gradient text-[#ffffff]">Sign up</button>
                </form>
                <div className="flex items-center justify-between gap-6 mt-8">
                    <div className="h-[1px] w-full border-[1px]"></div>
                    <p className="text-[#121212] text-[1.125rem]">or</p>
                    <div className="h-[1px] w-full border-[1px]"></div>
                </div>
                <button onClick={signupUser} className="w-full py-[22px] mt-8 flex items-center justify-center gap-3 bg-[#F2F2F2] rounded-lg">
                    <i className="text-[1.7rem]"><FcGoogle /></i>
                    <p>Sign up with Google</p>
                </button>
            </div>
            <footer className="mt-4 text-center text-[1.125rem]">Already have an account? <span onClick={(e)=>{e.stopPropagation(); showLoginPage()}} className="cursor-pointer py-1 border-b-[1px] border-[#192657] text-[#192657]">Login</span> </footer>
        </div>}
        </>
    )
}
