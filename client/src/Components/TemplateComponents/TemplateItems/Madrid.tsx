import { capitalizeFirstLetter } from "../../../Functions/capitalize"
import { useColorContext } from "../../../Functions/useColorContext"
import { useUserDetails } from "../../../Functions/useUserDetails"

export default function Madrid({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    const { currentColor } = useColorContext()

    const bgColor = `bg-${currentColor.color}`
    const textColor = `text-${currentColor.color}`
    
    return (
        <div className='flex flex-col min-h-[841px] w-[595px] relative' ref={itemref}>
            <div className="flex h-[107px]">
                <div className={`w-[30%] ${bgColor} transition-all duration-200 ease-in`}></div>
                <div className={`w-[70%]  p-6 ${bgColor} transition-all duration-200 ease-in`}>
                    <h1 className="text-[#444444] text-[2rem] font-medium ">
                        <span className="border-t-[2px] border-[#3780C3]">{capitalizeFirstLetter(firstName)}</span>
                        <span> {capitalizeFirstLetter(lastName)}</span>
                    </h1>
                </div>
            </div>
            <div className="flex">
                <div className={`w-[30%] min-h-[734px] p-6 ${bgColor} transition-all duration-200 ease-in`}>
                    <h2 className='text-[#333333] font-semibold text-xs mb-4'>{profession.toUpperCase()}</h2>
                    {skills[0].skill!=='' && 
                    <section>
                        <h2 className="text-xs font-semibold text-[#333333]">SKILLS</h2>
                        <ul className="px-4 list-disc mt-3">
                            {skills.map((skill, index)=>{
                                return (
                                    <li key={index} className="text-[10px] text-white">{capitalizeFirstLetter(skill.skill)}</li>
                                )
                            })}
                        </ul>
                    </section>
                    }
                    {languages[0].language!=='' && 
                    <section className="mt-4">
                        <h2 className="text-xs font-semibold text-[#333333]">LANGUAGES</h2>
                        <ul className="px-4 list-disc mt-3">
                            {languages.map((language, index)=>{
                                return (
                                    <li key={index} className="text-[10px] text-white">{capitalizeFirstLetter(language.language)}</li>
                                )
                            })}
                        </ul>
                    </section>
                    }
                </div>
                <div className="w-[70%] p-6 bg-[#ffffff]">
                    {professionalSummary!=='' &&
                    <section>
                        <h2 className={`text-xs font-semibold ${textColor}`}>PROFESSIONAL SUMMARY</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        <p className="mt-3 text-[10px] text-[#333333] ">
                        {professionalSummary}
                        </p>
                    </section>
                    }
                    {workHistory[0].jobTitle !== '' &&
                    <section className="mt-5">
                        <h2 className={`text-xs font-semibold ${textColor}`}>WORK EXPERIENCE</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        {workHistory.map((job, index)=>{
                            const {jobTitle, companyName, jobItems, month} = job
                            const {start, end} = month
                            return (
                                <div key={index} className='flex gap-4 mt-3'>
                                    <div className=" w-[18%]">
                                        <p className="text-[10px] text-[#333333]">{`${start} -`}</p>
                                        <p className="text-[10px] text-[#333333]">{`${end}`}</p>
                                    </div>
                                    <div className="w-[82%]">
                                        <h3 className={`${textColor} text-[10px]`}>{jobTitle.toUpperCase()}</h3>
                                        <h4 className="text-[10px] text-[#333333]">{capitalizeFirstLetter(companyName)}</h4>
                                        {jobItems[0].jobDetail!==''&&
                                        <ul className="list-disc pl-6">
                                            {jobItems.map((item, index)=>{
                                            return (
                                                <li key={index} className="text-[10px] text-[#7D7D7D] ">{item.jobDetail}</li>
                                            )
                                            })}
                                        </ul>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    }

                    {education[0].degree!=='' &&
                    <section className="mt-5">
                        <h2 className={`text-xs font-semibold ${textColor}`}>EDUCATION</h2>
                        <hr  className="border-t-[1px] border-[#C4C4C4] mt-1"/>
                        {education.map((education, index)=>{
                            const {degree, schoolName, course, month, location} = education
                            const {start, end} = month
                            return (
                                <div key={index} className='flex gap-4 mt-3'>
                                    <div className=" w-[18%]">
                                            <p className="text-[10px] text-[#333333]">{`${start} -`}</p>
                                            <p className="text-[10px] text-[#333333]">{`${end}`}</p>
                                        </div>
                                    <div>
                                        <h3 className={`${textColor} text-[10px]`}>{`${degree.toUpperCase()} ${capitalizeFirstLetter(course)}`}</h3>
                                        <h4 className="text-[10px] text-[#333333] mt-2">{capitalizeFirstLetter(schoolName)}</h4>
                                        <h5 className="text-[10px] italic text-[#7D7D7D]">{capitalizeFirstLetter(location)}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    }
                </div>
            </div>
            <div className="min-h-[30px] absolute flex justify-around px-6 w-full text-[10px] text-white py-[10px] top-[10%] bg-[#3780C3]">
                <p>{phoneNumber}</p>
                <p>{email}</p>
                <p>{`${capitalizeFirstLetter(state)} ${country===''? '': ','} ${capitalizeFirstLetter(country)}`}</p>
            </div>
        </div>
    )
}
