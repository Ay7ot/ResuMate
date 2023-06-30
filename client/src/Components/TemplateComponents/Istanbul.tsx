import { FiPhoneCall } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'

export default function Istanbul({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    return (
        <div className='flex justify-between min-h-[841px] w-full bg-[#f4f5fd] relative' ref={itemref }>
            <div className='w-[30%]  bg-[#0E9FC1] min-h-full text-[#ffffff]'>
                <h1 className="text-xl pt-6 px-6 font-semibold">NAME <br /> SURNAME</h1>
                <section className="flex flex-col gap-3 pt-6 px-6">
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><FiPhoneCall /></i>
                        <p className="text-[10px]">+234 8075200170</p>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><GoMail /></i>
                        <p className="text-[10px] w-full break-all">ayomidotzee@gmail.com</p>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><IoLocationOutline /></i>
                        <p className="text-[10px] break-words">Abuja, Nigeria</p>
                    </div>
                </section>
                <section className="mt-6">
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">SKILLS</h2>
                    <ul className="px-10 list-disc mt-3">
                        <li className="text-[10px] mt-2">Executive team leadership</li>
                        <li className="text-[10px] mt-2">Sales Management</li>
                        <li className="text-[10px] mt-2">Inventory report generation</li>
                    </ul>
                </section>
                <section className="mt-6">
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">AWARD</h2>
                    <ul className="px-10 list-disc mt-3">
                        <li className="text-[10px] mt-2">Executive team leadership</li>
                        <li className="text-[10px] mt-2">Sales Management</li>
                    </ul>
                </section>
                <section className="mt-6">
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">LANGUAGE</h2>
                    <ul className="px-10 list-disc mt-3">
                        <li className="text-[10px] mt-2">English</li>
                        <li className="text-[10px] mt-2">Yoruba</li>
                    </ul>
                </section>
            </div>

            <div className='w-[70%] px-4 py-6'>
                <section>
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">PROFESSIONAL SUMMARY</h2>
                    <p className="text-[#7D7D7D] text-[10px] mt-2">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. In amet velit duis justo in quisque pharetra malesuada urna. Suspendisse mi tellus mauris consectetur in odio. Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </p>
                </section>
                <section className="mt-4">
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">WORK EXPERIENCE</h2>
                    <div className="mt-2">
                        <h3 className="text-[10px] text-[#0E9FC1]">JOB TITLE</h3>
                        <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">Company title</h4>
                        <h5 className="text-[10px] mt-1 text-[#7D7D7D]">Month 20xx - Month 20xx</h5>
                        
                        <ul className="list-disc pl-8">
                            <li className="text-[10px] text-[#7D7D7D] mt-2 ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                        </ul>
                    </div>
                    <div className="mt-2">
                        <h3 className="text-[10px] text-[#0E9FC1]">JOB TITLE</h3>
                        <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">Company title</h4>
                        <h5 className="text-[10px] mt-1 text-[#7D7D7D]">Month 20xx - Month 20xx</h5>
                        
                        <ul className="list-disc pl-8">
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                            <li className="text-[10px] text-[#7D7D7D] mt-2">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                        </ul>
                    </div>
                    
                </section>
                <section className="mt-4">
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">EDUCATION</h2>
                    <h3 className="text-[#0E9FC1] text-[10px] mt-2">DEGREE  Month 20xx-20xx</h3>
                    <h4 className="text-[10px] text-[#7D7D7D] mt-2">School Name</h4>
                    <p className="text-[10px] text-[#7D7D7D] mt-2">Location</p>
                </section>
            </div>
        </div>
    )
}