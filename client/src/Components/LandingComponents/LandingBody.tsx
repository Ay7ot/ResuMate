import { RiCompassFill } from 'react-icons/ri'
import { useGeneralAppContext } from '../../Functions/useGeneralAppContext'
import { useNavigate } from 'react-router-dom'

export default function LandingBody() {

  const { dispatch, currentUser } = useGeneralAppContext()

  const navigateTo = useNavigate()

  function showLoginPage(){
    dispatch({
      type: 'setShowLogin',
      payload: {
        showLoginPayload: true
      }
    })
  }

  function createResumeButtonFunction(){
    if(currentUser !== null){
      navigateTo('/templates')
    } else {
      showLoginPage()
    }
  }
  
  return (
    <div className='pb-4 min-h-[85vh] flex items-center justify-center flex-col mx-10 max-w-[600px] lg:max-w-[800px] landing-bg relative'>
      <div className='z-[99999] flex text-[#192657] gap-2 items-center rounded-full py-[10px] px-[12px] bg-[#1926571a]'>
        <i className='text-[1.2rem]'><RiCompassFill /></i>
        <p className='text-[0.9rem]'>The easiest way to build a resume</p>
      </div>
      <h1 className='z-[99999] font-bold text-[2rem] lg:text-[3rem] text-center text-[#192657] mt-7'>Build Your Professional Resume with our Creative Templates</h1>
      <p className='z-[99999] text-center text-[#333333] text-[0.8rem] lg:text-base mt-8 leading-6 lg:leading-8'>
        Crafting an impressive Resume has never been easier or more efficent. Our user-friendly platform offers a range of powerful tools and features to help you create a compelling resume in no time. Say goodbye to the hassle of formatting and let our intuitive interface guide you through the process.
      </p>
      <button onClick={(e)=>{e.stopPropagation(); createResumeButtonFunction()}} className="z-[99999] mt-14 px-16 py-4 rounded-md gradient text-[#ffffff]">Create Resume</button>
    </div>
  )
}
