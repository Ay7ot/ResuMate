
export default function Lisbon({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    return (
        <div className=' min-h-[841px] w-[595px] bg-[#f4f5fd] relative' ref={itemref}>
            <div className="bg-[#EFB153] p-6 text-[#ffffff]">
                <h1 className="text-[2rem] font-semibold">Name Surname</h1>
                <div className="mt-3">
                    <p className="text-[10px] font-semibold mt-1">Address <span className="font-normal"> Lagos, Nigeria</span></p>
                    <p className="text-[10px] font-semibold mt-1">Phone Number <span className="font-normal"> +234 8075200170</span></p>
                    <p className="text-[10px] font-semibold mt-1">Email Address <span className="font-normal"> aydot@aydot.com</span></p>
                </div>
            </div>

            <div className="p-6">
                <p className="text-[#33333] text-[10px]">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. In amet velit duis justo in quisque pharetra malesuada urna. Suspendisse mi tellus mauris consectetur in odio. Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </p>
               
                <section className="mt-2">
                    <h2 className="text-[#EFB153] text-xs font-semibold mb-1">SKILLS</h2>
                    <hr className="border-t-[1px] border-[#C4C4C4]"/>
                    <div className="flex justify-between gap-3 mt-2">
                        <div className="w-[20%]">

                        </div>
                        <ul className="w-[80%] pl-4 list-disc text-[#333333]">
                            <li className="text-[10px] mt-1">Executive team leadership</li>
                            <li className="text-[10px] mt-1">Sales Management</li>
                            <li className="text-[10px] mt-1">Inventory report generation</li>
                        </ul>
                    </div>
                </section>

                <section className="mt-2">
                    <h2 className="text-[#EFB153] text-xs font-semibold mb-1">WORK EXPERIENCE</h2>
                    <hr className="border-t-[1px] border-[#C4C4C4]"/>
                    <div className="flex justify-between gap-3 mt-2">
                        <div className="w-[20%]">
                            <p className="text-[#333333] text-[10px]">Month 20xx -<br /> Month 20xx</p>
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[10px] text-[#EFB153]">JOB TITLE</h3>
                            <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">Company title</h4>

                            
                            <ul className="list-disc pl-4 text-[#333333]">
                                <li className="text-[10px] mt-1 ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                <li className="text-[10px] mt-1">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                <li className="text-[10px] mt-1">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                <li className="text-[10px] mt-1">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3 mt-2">
                        <div className="w-[20%]">
                            <p className="text-[#333333] text-[10px]">Month 20xx -<br /> Month 20xx</p>
                        </div>
                        <div className="w-[80%]">
                            <h3 className="text-[10px] text-[#EFB153]">JOB TITLE</h3>
                            <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">Company title</h4>

                            
                            <ul className="list-disc pl-4 text-[#333333]">
                                <li className="text-[10px] mt-1 ">Lorem ipsum dolor sit amet consectetur. Quisque morbi turpis semper at adipiscing. Quam sagittis quis tempus mattis diam. </li>
                                <li className="text-[10px] mt-1">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                <li className="text-[10px] mt-1">Neque auctor duis id curabitur sed morbi vulputate ut. Nisl risus feugiat at amet pellentesque. </li>
                                <li className="text-[10px] mt-1">Neque eu quisque porttitor leo viverra tortor pharetra. Porttitor arcu gravida amet tristique. Consectetur lectus sit egestas viverra nulla. </li>
                            </ul>
                        </div>
                    </div>
                </section>
                
                <section className="mt-2">
                    <h2 className="text-[#EFB153] text-xs font-semibold mb-1">EDUCATION</h2>
                    <hr className="border-t-[1px] border-[#C4C4C4]"/>
                    <div className="flex justify-between gap-3 mt-3">
                        <p className="text-[10px] text-[#333333] w-[20%]">
                            Month 20xx -
                            Month 20xx
                        </p>
                        <div className="w-[80%]">
                            <h3 className='text-[#EFB153] text-[10px]'>DEGREE</h3>
                            <h4 className="text-[10px] text-[#333333]">School Name</h4>
                            <h5 className="text-[10px] italic text-[#7D7D7D]">Location</h5>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}
