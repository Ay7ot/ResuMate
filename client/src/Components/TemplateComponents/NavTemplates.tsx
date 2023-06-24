import { Link } from "react-router-dom";

export default function NavTemplates() {
  return (
    <div className="bg-[#ffffff] w-full z-[999999] sticky top-0 landingShadow py-[1rem] px-8 md:px-[3rem] lg:px-[6rem] flex justify-between items-center">
      <Link to='/landing'>
        <div className="flex items-center gap-2">
          <img src="resumateIcon.png" className="w-[25px] md:w-[30px]"/>
          <p className="text-[#192657] font-bold  text-xl md:text-[1.5rem]">ResuMate</p>
        </div>
      </Link>
      <button className='rounded-md py-3 px-7 border-[1px] border-[#747C99] text-[#747C99] font-medium'>Choose Template</button>
    </div>  
  )
}
