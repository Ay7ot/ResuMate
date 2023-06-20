import { HiOutlineBars3BottomRight } from 'react-icons/hi2'
import { useGeneralAppContext } from '../../Functions/useGeneralAppContext'

export default function Navlanding() {

  const {  dispatch } = useGeneralAppContext()

  function showNavBar(){
    dispatch({
      type: 'showNavBar'
    })
  }

  return (
    <>
    <div className='w-full sticky top-0 landingShadow py-[1rem] px-8 md:px-[3rem] lg:px-[6rem] flex justify-between'>
        <div className="flex items-center gap-2">
            <img src="resumateIcon.png" className="w-[25px] md:w-[30px]"/>
            <p className="text-[#192657] font-bold  text-xl md:text-[1.5rem]">ResuMate</p>
        </div>
        <div className='hidden lg:block'>
            <button className="w-[10rem] px-[28px] py-[12px] ">Login</button>
            <button className=" px-[28px] py-[12px] rounded-md gradient text-[#ffffff]">Create Resume</button>
        </div>
        <div className='flex md:hidden items-center text-[1.9rem]'>
          <i onClick={(e)=>{e.stopPropagation(); showNavBar()}}><HiOutlineBars3BottomRight /></i>
        </div>
    </div>
    
    </>
  )
}
