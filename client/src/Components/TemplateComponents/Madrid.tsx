
export default function Madrid({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    return (
        <div className='flex flex-col min-h-[841px] w-[595px] relative' ref={itemref}>
            <div className="flex">
                <div className="w-[30%] bg-[#3780c366]"></div>
                <div className="w-[70%] p-6 bg-[#3780C333]">
                    <h1 className="text-[#444444] text-[2rem] font-medium ">
                        <span className="border-t-[2px] border-[#3780C3]">Name</span>
                        <span> Surname</span>
                    </h1>
                </div>
            </div>
            <div className="flex mt-3">
                <div className="w-[30%] min-h-[500px] p-6 bg-[#3780C333]">
                    <section>
                        <h2 className="text-xs font-semibold text-[#333333]">SKILLS</h2>
                        <ul className="px-4 list-disc mt-3">
                            <li className="text-[10px] text-[#7D7D7D]">Executive team leadership</li>
                            <li className="text-[10px] text-[#7D7D7D]">Sales Management</li>
                            <li className="text-[10px] text-[#7D7D7D]">Inventory report generation</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className="text-xs font-semibold text-[#333333]">AWARDS</h2>
                        <ul className="px-4 list-disc mt-3">
                            <li className="text-[10px] text-[#7D7D7D]">Executive team leadership</li>
                            <li className="text-[10px] text-[#7D7D7D]">Sales Management</li>
                            <li className="text-[10px] text-[#7D7D7D]">Inventory report generation</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className="text-xs font-semibold text-[#333333]">LANGUAGES</h2>
                        <ul className="px-4 list-disc mt-3">
                            <li className="text-[10px] text-[#7D7D7D]">English</li>
                            <li className="text-[10px] text-[#7D7D7D]">Yoruba</li>
                        </ul>
                    </section>
                </div>
                <div className="w-[70%] p-6 bg-[#ffffff]">
                    <section>
                        <h2 className="text-xs font-semibold text-[#3780C3]">PROFESSIONAL SUMMARY</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        <p className="mt-3 text-[10px] text-[#333333] ">
                            Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. In amet velit duis justo in quisque pharetra malesuada urna. Suspendisse mi tellus mauris consectetur in odio. Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. 
                        </p>
                    </section>
                    <section className="mt-5">
                        <h2 className="text-xs font-semibold text-[#3780C3]">WORK EXPERIENCE</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        <div className='flex gap-4 mt-3'>
                            <p className="text-[10px] text-[#333333] w-[18%]">
                                Month 20xx - <br />
                                Month 20xx
                            </p>
                            <div className="w-[82%]">
                                <h3 className='text-[#3780C3] text-[10px]'>JOB TITLE</h3>
                                <h4 className="text-[10px] text-[#333333]">Company Name</h4>
                                <ul className="list-disc pl-6">
                                    <li className="text-[10px] text-[#7D7D7D] ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-4 mt-3'>
                            <p className="text-[10px] text-[#333333] w-[18%]">
                                Month 20xx - <br />
                                Month 20xx
                            </p>
                            <div className="w-[82%]">
                                <h3 className='text-[#3780C3] text-[10px]'>JOB TITLE</h3>
                                <h4 className="text-[10px] text-[#333333]">Company Name</h4>
                                <ul className="list-disc pl-6">
                                    <li className="text-[10px] text-[#7D7D7D] ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                    <li className="text-[10px] text-[#7D7D7D]">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mt-5">
                        <h2 className="text-xs font-semibold text-[#3780C3]">EDUCATION</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        <div className='flex gap-4 mt-3'>
                            <p className="text-[10px] text-[#333333] w-[18%]">
                                Month 20xx - <br />
                                Month 20xx
                            </p>
                            <div>
                                <h3 className='text-[#3780C3] text-[10px]'>DEGREE</h3>
                                <h4 className="text-[10px] text-[#333333] mt-2">School Name</h4>
                                <h5 className="text-[10px] italic text-[#7D7D7D]">Location</h5>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="absolute flex justify-around px-6 w-full text-[10px] text-white py-[10px] top-[9%] bg-[#3780C3]">
                <p>+234 8075200170</p>
                <p>aydot@aydot.com</p>
                <p>Lagos, Nigeria</p>
            </div>
        </div>
    )
}
