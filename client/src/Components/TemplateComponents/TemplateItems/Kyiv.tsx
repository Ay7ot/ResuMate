import { capitalizeFirstLetter } from "../../../Functions/capitalize"
import { useColorContext } from "../../../Functions/useColorContext"
import { useGeneralAppContext } from "../../../Functions/useGeneralAppContext"
import { useUserDetails } from "../../../Functions/useUserDetails"

export default function Kyiv() {

    const { itemRef } = useGeneralAppContext()

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    const { currentColor } = useColorContext()
    const textColor = `text-${currentColor.color}`

    return (
        <div className='flex justify-between gap-[10%] min-h-[841px] px-[3rem] pt-[3rem] w-[595px] bg-[#ffffff]' ref={itemRef}>
            <div className="w-[60%]">
                <div>
                    {firstName!==''&& <h2 className="font-bold text-[2rem]">{`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`}</h2>}
                    {profession!=='' && <p className="text-xs">{capitalizeFirstLetter(profession)}</p>}
                </div>
                <div className="mt-10 flex flex-col gap-6">
                    {professionalSummary!=='' &&
                    <div>
                        <h3 className={`uppercase ${textColor} text-xs`}>Professional Summary</h3>
                        <p className="text-[#666666] text-[10px] mt-2">{professionalSummary}</p>
                    </div>
                    }
                    {workHistory.length>0 && workHistory[0].jobTitle!=='' &&
                    <div>
                        <h3 className={`uppercase ${textColor} text-xs`}>Experience</h3>
                        <div className="mt-2">
                            {workHistory.map((work, index)=>{
                                const { month,jobItems } = work
                                const { start, end } = month
                                return (
                                    <div key={index} className="flex flex-col gap-1">
                                        <h4 className="text-sm"><span className="font-bold">{`${capitalizeFirstLetter(work.companyName)}${work.location!==''? ',':''}`} </span>{`${capitalizeFirstLetter(work.location)} ${work.jobTitle!==''?'-':''} ${capitalizeFirstLetter(work.jobTitle)}`}</h4>
                                        <h5 className="text-[#666666] text-sm">{`${start} ${end!==''?'-':''} ${end}`}</h5>
                                        {jobItems.length>0 && jobItems[0].jobDetail!=='' && 
                                        <ul className="list-disc pl-8">
                                            {jobItems.map((item, index)=>{
                                                return (
                                                    <li key={index} className="text-[10px] text-[#7d7d7d] ">{item.jobDetail}</li>
                                                )
                                            })}
                                        </ul>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    }
                    {education.length>0 && education[0].degree!==''&&
                    <div>
                        <h3 className={`uppercase ${textColor} text-xs`}>Education</h3>
                        <div className="mt-2">
                            {education.map((edu, index)=>{
                                const {schoolName, degree, course, month, location} = edu
                                const { start, end } = month
                                return (
                                    <div key={index} className="flex flex-col gap-1">
                                        <h4 className="text-sm"><span className="font-bold">{`${schoolName}${location===''?'':','}`}</span>{` ${location}`}</h4>
                                        <h5 className="text-[#666666] text-sm">{`${start} ${end!==''?'-':''} ${end}`}</h5>
                                        <h6 className="text-[#7d7d7d] text-xs">{`${degree} ${course}`}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className="w-[30%]">
                <div className="text-xs flex flex-col gap-1">
                    <p>{`${capitalizeFirstLetter(state)}${country===''?'':','} ${capitalizeFirstLetter(country)}`}</p>
                    {phoneNumber!==''&& <p className="font-bold">{phoneNumber}</p>}
                    {email!=='' && <p className="font-bold">{email}</p>}
                </div>
                <div className="mt-10 flex flex-col gap-6">
                    {skills.length>0 && skills[0].skill!=='' &&
                    <div>
                        <h3 className={`uppercase ${textColor} text-xs`}>Skills</h3>
                        <ul className="text-[#7d7d7d] text-xs mt-4 flex flex-col gap-2">
                            {skills.map((skill, index)=>{
                                return (
                                    <li key={index}>{skill.skill}</li>
                                )
                            })}
                        </ul>
                    </div>
                    }
                    {languages.length>0 && languages[0].language!=='' &&
                    <div>
                        <h3 className={`uppercase ${textColor} text-xs`}>Languages</h3>
                        <ul className="text-[#7d7d7d] text-xs mt-4 flex flex-col gap-2">
                            {languages.map((language, index)=>{
                                return (
                                    <li key={index}>{language.language}</li>
                                )
                            })}
                        </ul>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}
