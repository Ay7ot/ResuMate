
export default function Navlanding() {
  return (
    <div className='w-full sticky top-0 landingShadow py-[1rem] px-[3rem] lg:px-[6rem] flex justify-between'>
        <div className="flex items-center gap-2">
            <img src="resumateIcon.png" className="w-[30px]"/>
            <p className="text-[#192657] font-bold text-[1.5rem]">ResuMate</p>
        </div>
        <div>
            <button className="w-[10rem] px-[28px] py-[12px] ">Login</button>
            <button className=" px-[28px] py-[12px] rounded-md gradient text-[#ffffff]">Create Resume</button>
        </div>
    </div>
  )
}
