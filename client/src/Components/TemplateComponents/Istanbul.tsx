import { FiPhoneCall } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import { useUserDetails } from '../../Functions/useUserDetails'

export default function Istanbul({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state } = useUserDetails()
    
    return (
        <div className='flex justify-between min-h-[841px] w-full bg-[#f4f5fd] relative' ref={itemref }>
            <div className='w-[30%]  bg-[#0E9FC1] min-h-full text-[#ffffff]'>
                <h1 className="text-xl pt-6 px-6 font-semibold">{firstName.toUpperCase()} <br /> {lastName.toUpperCase()}</h1>
                <h2 className='px-6 font-semibold text-xs pt-3'>{profession}</h2>
                <section className="flex flex-col gap-3 pt-6 px-6">
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><FiPhoneCall /></i>
                        <p className="text-[10px]">{phoneNumber}</p>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><GoMail /></i>
                        <p className="text-[10px] w-full break-all">{email}</p>
                    </div>
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><IoLocationOutline /></i>
                        <p className="text-[10px] break-words">{`${state}, ${country}`}</p>
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
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">LANGUAGE</h2>
                    <ul className="px-10 list-disc mt-3">
                        <li className="text-[10px] mt-2">English</li>
                        <li className="text-[10px] mt-2">Yoruba</li>
                    </ul>
                </section>
            </div>

            <div className='w-[70%] px-4 py-6'>
                {professionalSummary!=='' && 
                <section>
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">PROFESSIONAL SUMMARY</h2>
                    <p className="text-[#7D7D7D] text-[10px] mt-2">{professionalSummary}</p>
                </section>
                }
                {workHistory.length > 0 && workHistory[0].jobTitle!=='' &&
                <section className="mt-4">
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">WORK EXPERIENCE</h2>
                    {workHistory.map((work, index)=>{
                        return (
                            <div key={index} className="mt-2">
                                <h3 className="text-[10px] text-[#0E9FC1]">{work.jobTitle.toUpperCase()}</h3>
                                <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">{work.companyName}</h4>
                                <h5 className="text-[10px] mt-1 text-[#7D7D7D]">{work.month.start} - {work.month.end}</h5>
                                
                                <ul className="list-disc pl-8">
                                    {work.jobItems.map((workItem)=>{
                                        return (
                                            <li key={workItem.id} className={`text-[10px] text-[#7D7D7D] mt-2 ${workItem.jobDetail === '' ? 'hidden': ''}`}>{workItem.jobDetail}</li>
                                        )
                                    })}
                                </ul>
                            </div> 
                        )
                    })}
                    
                </section>
                }
                {education.length > 0 &&
                <section className="m t-4">
                    <h2 className="text-[#0E9FC1] text-xs font-semibold">EDUCATION</h2>
                    <h3 className="text-[#0E9FC1] text-[10px] mt-2">DEGREE  Month 20xx-20xx</h3>
                    <h4 className="text-[10px] text-[#7D7D7D] mt-2">School Name</h4>
                    <p className="text-[10px] text-[#7D7D7D] mt-2">Location</p>
                </section>
                }
            </div>
        </div>
    )
}