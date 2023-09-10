import { Link, useNavigate } from "react-router-dom";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import ThemeToggler from "../ThemeToggler";

export default function NavTemplates() {

  const {  resumeTemplates, darkTheme } = useGeneralAppContext()
  const state = resumeTemplates.find(res=>res.isSelected===true)
  const navigate = useNavigate()

  function navigateTo(){
    if(state){
      navigate('/edit-template', {
        state: state
      })
    } else return
  }

  return (
    <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#ffffff]'} w-full z-[999999] sticky top-0 landingShadow py-[1rem] px-8 md:px-[3rem] lg:px-[6rem] flex justify-between items-center`}>
      <Link to='/'>
        <div className="flex items-center gap-2">
          <img src="resumateIcon.png" className="w-[25px] md:w-[30px]"/>
          <p className={`${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} font-bold  text-xl md:text-[1.5rem]`}>ResuMate</p>
        </div>
      </Link>
      <div className="flex items-center gap-6">
        <ThemeToggler />
        <button onClick={navigateTo}  className={`${state?.isSelected ? 'border-[#121212] gradientForChooseTemplate' : ' border-[#747C99] text-[#747C99]'} hidden md:block rounded-md py-3 px-7 border-[1px] font-medium duration-300 ease-in transition-colors`}>Choose Template</button>
      </div>
    </div>  
  )
}
