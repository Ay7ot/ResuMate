import { FiPhoneCall } from 'react-icons/fi'
import { GoMail } from 'react-icons/go'
import { IoLocationOutline } from 'react-icons/io5'
import { useUserDetails } from '../../../Functions/useUserDetails'
import { capitalizeFirstLetter } from '../../../Functions/capitalize'
import { useColorContext } from '../../../Functions/useColorContext'
import { useGeneralAppContext } from '../../../Functions/useGeneralAppContext'

export default function Istanbul() {

    const { itemRef, resumeFont } = useGeneralAppContext()

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    const { currentColor } = useColorContext()
    const bgColor = `bg-${currentColor.color}`
    const textColor = `text-${currentColor.color}`
    const fontStyle = `font-${resumeFont}`


    return (
        <div className={`flex justify-between min-h-[841px] w-full bg-[#f4f5fd] relative ${fontStyle}`} ref={itemRef}>
            <div className={`w-[30%] transition-all duration-200 ease-in ${bgColor} min-h-full text-[#ffffff]`}>
                <h1 className="text-xl pt-6 px-6 font-semibold break-all">{firstName.toUpperCase()} <br /> {lastName.toUpperCase()}</h1>
                <h2 className='px-6 font-semibold text-xs pt-3'>{capitalizeFirstLetter(profession)}</h2>
                <section className="flex flex-col gap-3 pt-6 px-6">
                    {phoneNumber!==''&&
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><FiPhoneCall /></i>
                        <p className="text-[10px]">{phoneNumber}</p>
                    </div>
                    }
                    {email!=='' && 
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><GoMail /></i>
                        <p className="text-[10px] w-full break-all">{email}</p>
                    </div>
                    }
                    {state!=='' && 
                    <div className="flex gap-3 items-center ">
                        <i className="text-[1.2rem]"><IoLocationOutline /></i>
                        <p className="text-[10px] break-words">{`${capitalizeFirstLetter(state)}, ${capitalizeFirstLetter(country)}`}</p>
                    </div>
                    }
                </section>
                {skills[0].skill !=='' && 
                    <section className="mt-6">
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">SKILLS</h2>
                    <ul className="px-10 list-disc mt-3">
                        {skills.map((skill, index)=>{
                            return (
                                <li key={index} className="text-[10px] mt-2">{capitalizeFirstLetter(skill.skill)}</li>
                            )
                        })}
                    </ul>
                </section>
                }
                {languages[0].language!=='' &&
                <section className="mt-6">
                    <h2 className="bg-[#00000033] px-6 py-3 font-semibold text-xs">LANGUAGE</h2>
                    <ul className="px-10 list-disc mt-3">
                        {languages.map((language, index)=>{
                            return (
                                <li key={index} className="text-[10px] mt-2">{capitalizeFirstLetter(language.language)}</li>
                            )
                        })}
                    </ul>
                </section>
                }
            </div>

            <div className='w-[70%] px-4 py-6'>
                {professionalSummary!=='' && 
                <section>
                    <h2 className={`${textColor} text-xs font-semibold`}>PROFESSIONAL SUMMARY</h2>
                    <p className="text-[#7D7D7D] text-[10px] mt-2">{professionalSummary}</p>
                </section>
                }

                {workHistory.length > 0 && workHistory[0].jobTitle!=='' &&
                <section className="mt-4">
                    <h2 className={`${textColor} text-xs font-semibold`}>WORK EXPERIENCE</h2>
                    {workHistory.map((work, index)=>{
                        return (
                            <div key={index} className="mt-2">
                                <h3 className={`text-[10px] ${textColor}`}>{work.jobTitle.toUpperCase()}</h3>
                                <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">{capitalizeFirstLetter(work.companyName)}</h4>
                                <h5 className="text-[10px] mt-1 text-[#7D7D7D]">{`${work.month.start} ${work.month.end!=='' ? '-' : ''} ${work.month.end}`}</h5>
                                
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
                {education.length > 0 && education[0].degree!=='' &&
                <section className="mt-4">
                    <h2 className={`${textColor} text-xs font-semibold`}>EDUCATION</h2>
                    {education.map((edu, index)=>{
                        const {degree, course, month, location, schoolName} = edu
                        const {start, end} = month
                        return (
                            <div key={index}>
                                <h3 className={`${textColor} text-[10px] mt-2`}>{`${degree.toUpperCase()} ${capitalizeFirstLetter(course)}`}</h3>
                                <h3 className={`${textColor} text-[10px] mt-2`}>{`${start} - ${end}`}</h3>
                                <h4 className="text-[10px] text-[#7D7D7D] mt-2">{capitalizeFirstLetter(schoolName)}</h4>
                                <p className="text-[10px] text-[#7D7D7D] mt-2">{(capitalizeFirstLetter(location))}</p>
                            </div>
                        )
                    })}
                </section>
                }
            </div>
        </div>
    )
}