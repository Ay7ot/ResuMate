
export default function Porto({itemref}:{itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    return (
        <div className=' min-h-[841px] w-[595px] bg-[#f4f5fd]' ref={itemref}>
            <div className='h-full'>
                <section className="bg-[#4FC133] p-6 ">
                    <h1 className="text-[2rem] text-white font-semibold">Name Surname</h1>
                </section>
                <div className="flex">
                    <div className="w-[70%]  bg-[#ffffff] p-6">
                       <p className='text-[#333333] text-[10px]'>Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. In amet velit duis justo in quisque pharetra malesuada urna. Suspendisse mi tellus mauris consectetur in odio. Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </p>
                        <section className='mt-6'>
                            <h2 className='text-[#4FC133] text-xs font-semibold'>WORK EXPERIENCE</h2>
                            <hr />
                            <div className='flex gap-4 mt-3'>
                                <p className="text-[10px] text-[#333333] w-[22%]">
                                    Month 20xx - <br />
                                    Month 20xx
                                </p>
                                <div className="w-[78%]">
                                    <h3 className='text-[#4FC133] text-[10px]'>JOB TITLE</h3>
                                    <h4 className="text-[10px] text-[#333333]">Company Name</h4>
                                    <ul className="list-disc pl-6">
                                        <li className="text-[10px] text-[#7D7D7D] mt-2 ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='flex gap-4 mt-3'>
                                <p className="text-[10px] text-[#333333] w-[22%]">
                                    Month 20xx - <br />
                                    Month 20xx
                                </p>
                                <div className="w-[78%]">
                                    <h3 className='text-[#4FC133] text-[10px]'>JOB TITLE</h3>
                                    <h4 className="text-[10px] text-[#333333]">Company Name</h4>
                                    <ul className="list-disc pl-6">
                                        <li className="text-[10px] text-[#7D7D7D] mt-2 ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                        <li className="text-[10px] text-[#7D7D7D] mt-2">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <section className='mt-6'>
                            <h2 className='text-[#4FC133] text-xs font-semibold'>EDUCATION</h2>
                            <hr />
                            <div className='flex gap-4 mt-3'>
                                <p className="text-[10px] text-[#333333] w-[22%]">
                                    Month 20xx - <br />
                                    Month 20xx
                                </p>
                                <div>
                                    <h3 className='text-[#4FC133] text-[10px]'>DEGREE</h3>
                                    <h4 className="text-[10px] text-[#333333]">School Name</h4>
                                    <h5 className="text-[10px] italic text-[#7D7D7D] mt-3">Location</h5>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                    <div className="w-[30%] p-6">
                        <section>
                            <h2 className="text-xs font-semibold text-[#333333]">CONTACT</h2>
                            <div className="mt-2">
                                <h3 className="text-[10px] font-semibold text-[#333333]">Address</h3>
                                <p className="text-[10px] text-[#7D7D7D]">Lagos, Nigeria</p>
                            </div>
                            <div className="mt-2">
                                <h3 className="text-[10px] font-semibold text-[#333333]">Phone Number</h3>
                                <p className="text-[10px] text-[#7D7D7D]">+234 8075200170</p>
                            </div>
                            <div className="mt-2">
                                <h3 className="text-[10px] font-semibold text-[#333333]">Email</h3>
                                <p className="text-[10px] text-[#7D7D7D]">aydot@aydot.com</p>
                            </div>
                        </section>
                        <section className="mt-4">
                            <h2 className="text-xs font-semibold text-[#333333]">SKILLS</h2>
                            <ul className="px-4 list-disc mt-3">
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Executive team leadership</li>
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Sales Management</li>
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Inventory report generation</li>
                            </ul>
                        </section>
                        <section className="mt-4">
                            <h2 className="text-xs font-semibold text-[#333333]">AWARDS</h2>
                            <ul className="px-4 list-disc mt-3">
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Executive team leadership</li>
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Sales Management</li>
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Inventory report generation</li>
                            </ul>
                        </section>
                        <section className="mt-4">
                            <h2 className="text-xs font-semibold text-[#333333]">LANGUAGES</h2>
                            <ul className="px-4 list-disc mt-3">
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">English</li>
                                <li className="text-[10px] mt-2 text-[#7D7D7D]">Yoruba</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
