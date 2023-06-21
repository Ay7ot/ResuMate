import {useEffect, useRef} from 'react'
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import LandingBody from "./LandingBody";
import Navlanding from "./Navlanding";
import {RxCross1} from 'react-icons/rx';
import Login from '../AuthComponents/Login';
import Signup from '../AuthComponents/Signup';

export default function Landing() {

  const {navShown, dispatch, showLogin, showSignup} = useGeneralAppContext()

  const navref = useRef<HTMLDivElement>(null)
  const SignupRef = useRef<HTMLDivElement>(null)
  const loginRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation()
      if (navref.current && !navref.current.contains(event.target as Node)) {
        dispatch({
          type: 'hideNavBar'
        })
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation()
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        dispatch({
          type: 'setShowLogin',
          payload: {
              showLoginPayload: false
          }
        })
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation()
      if (SignupRef.current && !SignupRef.current.contains(event.target as Node)) {
        dispatch({
          type: 'setShowSignup',
          payload: {
            showSignupPayload: false
          }
        })
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  function hideNavBar(){
    dispatch({
      type: 'hideNavBar'
    })
  }


  return (
    <>
      <div className={`${navShown || showLogin || showSignup ? 'opacity-75 blur-sm ease-in transition-all duration-150 darken min-h-screen' : ''} pb-4`}>
        <Navlanding />
        <LandingBody />
      </div>
      <div ref={navref} className={`${navShown ? 'flex' : 'hidden'} md:hidden py-4 px-8 transition-all duration-150  flex-col ease-in z-[999999] top-0 right-0 fixed h-screen bg-[#f4f5fd] min-w-[250px]`}>
        <i className='self-end text-[1.9rem]' onClick={hideNavBar}><RxCross1 /></i>
        <div className='self-end flex flex-col gap-6 mt-6'>
          <button className="text-end px-[28px] py-[12px]">Login</button>
          <button className=" px-[28px] py-[12px] rounded-md gradient text-[#ffffff]">Create Resume</button>
        </div>
      </div>
      {showLogin && <div ref={loginRef} ><Login /></div>}
      {showSignup && <div ref={SignupRef} ><Signup /></div>}
    </>
  )
}
