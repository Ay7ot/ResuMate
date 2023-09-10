import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { useGeneralAppContext } from '../../Functions/useGeneralAppContext'
import { Link, useNavigate } from 'react-router-dom'
import ThemeToggler from '../ThemeToggler'

export default function Navlanding() {

  const { darkTheme, dispatch, navShown, showLogin, showSignup, currentUser } = useGeneralAppContext()

  const navigateTo = useNavigate()

  function showNavBar(){
    dispatch({
      type: 'showNavBar'
    })
  }

  function showLoginPage(){
    dispatch({
        type: 'setShowLogin',
        payload: {
            showLoginPayload: true
        }
    })
  }

  function showSignupPage(){
    dispatch({
        type: 'setShowSignup',
        payload: {
            showSignupPayload: true
        }
    })
  }

  function createResumeButtonFunction(){
    if(currentUser !== null){
      navigateTo('/templates')
    } else {
      showSignupPage()
    }
  }

  function loginResumeButtonFunction(){
    if(currentUser !== null){
      navigateTo('/templates')
    } else {
      showLoginPage()
    }
  }



  return (
    <>
    <div className={`w-full z-[999999] sticky top-0 landingShadow py-[1rem] px-8 md:px-[3rem] lg:px-[6rem] flex justify-between items-center ${navShown || showLogin || showSignup ? 'bg-[#121212]' : darkTheme ? '' :'bg-[#ffffff]'}`}>
        <Link to='/'>
          <div className="flex items-center gap-2">
            <img src="resumateIcon.png" className="w-[25px] md:w-[30px]"/>
            <p className={`${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} font-bold  text-xl md:text-[1.5rem]`}>ResuMate</p>
          </div>
        </Link>
        <div className='hidden md:block'>
            <ThemeToggler />
            <button className={` ${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} w-[10rem] px-[28px] py-[12px]`} onClick={(e)=>{e.stopPropagation(); loginResumeButtonFunction()}}>Login</button>
            <button className=" px-[28px] py-[12px] rounded-md gradient text-[#ffffff]" onClick={(e)=>{e.stopPropagation(); createResumeButtonFunction()}}>Create Resume</button>
        </div>
        <div className={`${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} flex md:hidden items-center text-[1.9rem]`}>
          <i onClick={(e)=>{e.stopPropagation(); showNavBar()}}><HiOutlineBars3BottomRight /></i>
        </div>
    </div>
    
    </>
  )
}
