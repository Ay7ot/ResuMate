import { RxCross1 } from "react-icons/rx";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../Functions/useAuthContext";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../firebase";
import { CgDanger } from "react-icons/cg";
import GoogleButton from "./GoogleButton";
import Loader from "../Loader";

export default function Signup() {

    const { dispatch, showSignup} = useGeneralAppContext()
    const [loading, setLoading] = useState(false)
    const [emailShown, setEmailShown] = useState(false)
    const [passwordShown, setPasswordShown] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    const {email, password, passwordConfirm, authDispatch, errorMessage} = useAuthContext()

    useEffect(()=>{
        authDispatch({
            type: 'setNoErrorMessage'
        })
    },[authDispatch])

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

    async function signupUser(userEmail: string, userPassword: string){
        
        if(email === ''){
            authDispatch({
                type:'setEmailEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'email', 
                        message: 'Email cannot be empty'
                    }
                }
            })
        } else if(password === ''){
            authDispatch({
                type:'setPasswordEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'password', 
                        message: 'Password cannot be empty'
                    }
                }
            })
        }else if(passwordConfirm === ''){
            authDispatch({
                type:'setPasswordConfirmEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'passwordConfirm', 
                        message: 'Password cannot be empty'
                    }
                }
            })
        } else if(password.length < 8){
            authDispatch({
                type:'setPasswordEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'password', 
                        message: 'Password cannot be less than 8 characters'
                    }
                }
            })
        } else if(passwordConfirm.length < 8){
            authDispatch({
                type:'setPasswordEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'passwordConfirm', 
                        message: 'Password cannot be less than 8 characters'
                    }
                }
            })
        } else if (password !== '' && passwordConfirm !== '' && password!==passwordConfirm){
            authDispatch({
                type:'setPasswordEmptyErrorMessage',
                payload: {
                    errorMessagePayload:{
                        type: 'passwordConfirm', 
                        message: 'Passwords do not match'
                    }
                }
            })
        } else {
            setLoading(true)
            await createUserWithEmailAndPassword(auth, userEmail, userPassword)
            .then(user => {
                dispatch({
                    type: 'setCurrentUser',
                    payload: {
                        currentUserPayload: user.user
                    }
                })
            })
            .catch((error)=>{
                console.error(error)
            })
            setLoading(false)
            navigateTo('/templates')
        } 
    }
    
    return (
        <>
        {showSignup && 
        <div className="absolute md:rounded-md flex flex-col justify-between top-0 md:left-[15%] lg:left-[25%] bg-white p-6 md:px-10 md:w-[70%] lg:w-[50%] w-full z-[999999999] dynamicHeight">
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
                <form onSubmit={(e)=>{e.preventDefault(); signupUser(email, password)}} className="flex flex-col gap-3 mt-6">
                    <div>
                        <p className={`text-[#192657] text-sm ${emailShown ? 'block pb-3' : 'hidden'}`}>Email Address</p>
                        <input 
                            type="email"
                            className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                            placeholder="Email"
                            onClick={showEmail}
                            value={email}
                            onChange={(e)=>{
                                authDispatch({
                                    type: 'setNoErrorMessage'
                                })
                                authDispatch({
                                    type:'setEmail',
                                    payload: {
                                        emailPayload: e.target.value
                                    }
                                })
                            }}
                        />
                        {
                            errorMessage.type==='email' && 
                            <div className=" mt-2 flex items-center gap-1 text-[#e44141] text-sm ">
                                <i><CgDanger /></i>
                                <p>{errorMessage.message}</p>
                            </div>
                        }
                    </div>

                    <div>
                        <p className={`text-[#192657] text-sm ${passwordShown ? 'block pb-3' : 'hidden'}`}>Password</p>
                        <input 
                            type="password"
                            className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                            placeholder="Password"
                            onClick={showPassword}
                            value={password}
                            onChange={(e)=>{
                                authDispatch({
                                    type: 'setNoErrorMessage'
                                })
                                authDispatch({
                                    type:'setPassword',
                                    payload: {
                                        passwordPayload: e.target.value
                                    }
                                })
                            }}
                        />
                        {
                            errorMessage.type==='password' && 
                            <div className=" mt-2 flex items-center gap-1 text-[#e44141] text-sm">
                                <i><CgDanger /></i>
                                <p>{errorMessage.message}</p>
                            </div>
                        }
                    </div>

                    <div>
                        <p className={`text-[#192657] text-sm ${showConfirm ? 'block pb-3' : 'hidden'}`}>Confirm Password</p>
                        <input 
                            type="password"
                            className="w-full outline-none rounded-none border-b-[1px] border-[#9d9d9d] pb-3 mb-1 text-[1rem] focus:pb-6 transition-all duration-500"
                            placeholder="Confirm Password"
                            onClick={setPasswordShowConfirm}
                            value={passwordConfirm}
                            onChange={(e)=>{
                                authDispatch({
                                    type: 'setNoErrorMessage'
                                })
                                authDispatch({
                                    type:'setPasswordConfirm',
                                    payload: {
                                        passwordConfirmPayload: e.target.value
                                    }
                                })
                            }}
                        />
                        {
                            errorMessage.type==='passwordConfirm' && 
                            <div className=" mt-2 flex items-center gap-1 text-[#e44141] text-sm ">
                                <i><CgDanger /></i>
                                <p>{errorMessage.message}</p>
                            </div>
                        }
                    </div>
                    <button className="z-[99999] mt-14 md:mt-6 w-full  flex justify-center items-center py-4 rounded-md gradient text-[#ffffff]">{loading ? <Loader /> : 'Sign up'}</button>
                </form>
                <div className="flex items-center justify-between gap-6 mt-8">
                    <div className="h-[1px] w-full border-[1px]"></div>
                    <p className="text-[#121212] text-[1.125rem]">or</p>
                    <div className="h-[1px] w-full border-[1px]"></div>
                </div>
                <GoogleButton buttonName='Sign up'/>
            </div>
            <footer className="mt-4 text-center text-[1.125rem]">Already have an account? <span onClick={(e)=>{e.stopPropagation(); showLoginPage()}} className="cursor-pointer py-1 border-b-[1px] border-[#192657] text-[#192657]">Login</span> </footer>
        </div>}
        </>
    )
}
