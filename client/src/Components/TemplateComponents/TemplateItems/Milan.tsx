import { capitalizeFirstLetter } from "../../../Functions/capitalize"
import { useColorContext } from "../../../Functions/useColorContext"
import { useUserDetails } from "../../../Functions/useUserDetails"

export default function Milan({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    const { currentColor } = useColorContext()
    const textColor = `text-${currentColor.color}`
    
    return (
        <div className='min-h-[841px] w-[595px] bg-[#ffffff] px-[5rem] pt-8' ref={itemref}>
            
            <div className="grid grid-cols-2 gap-3">
                <div className="text-[10px]">
                    <p className="text-[#999999] ">{`${capitalizeFirstLetter(state)}${country===''?'':'-'} ${capitalizeFirstLetter(country)}`}</p>
                    {phoneNumber!=='' && <p className={`${textColor} `}>{phoneNumber}</p>}
                    {email!==''&& <p className={`${textColor} `}>{email}</p>}
                </div>
                {profession!==''&&<h3 className="text-sm">{capitalizeFirstLetter(profession)}</h3>}
            </div>
            
            {firstName!==''&&  <h2 className="border-b-4 mt-6 border-[#292828] uppercase text-[2rem] break-all">{`${firstName} ${lastName}`}</h2>}
            
            {professionalSummary!==''&& 
                <div className="mt-8">
                    <h3 className="uppercase text-xs text-[#424242]">professional summary</h3>
                    <p className="text-[10px] mt-2 text-[#666666]">{professionalSummary}</p>
                </div>
            }
            
            <div className="grid grid-cols-2 mt-8 gap-3">
                {skills.length>0 && skills[0].skill!==''&&
                <div>
                    <h3 className="uppercase text-xs text-[#424242]">skills</h3>
                    <ul className="list-disc pl-4 text-[10px] text-[#666666] mt-2">
                        {skills.map((skill, index)=>{
                            return (
                                <li key={index}>{capitalizeFirstLetter(skill.skill)}</li>
                            )
                        })}
                    </ul>
                </div>
                }
                
                {languages.length>0 && languages[0].language!==''&&
                <div>
                    <h3 className="uppercase text-xs text-[#424242]">languages</h3>
                    <ul className="list-disc pl-4 text-[10px] text-[#666666] mt-2">
                        {languages.map((language, index)=>{
                            return (
                                <li key={index}>{capitalizeFirstLetter(language.language)}</li>
                            )
                        })}
                    </ul>
                </div>
                }
            </div>

            {workHistory[0].jobTitle!==''&&
                <div className="mt-8">
                    <h3 className="uppercase text-xs text-[#424242]">experience</h3>
                    <div className="mt-3">
                        {workHistory.map((work, index)=>{
                            const {companyName, location, jobItems, jobTitle, month} = work
                            const { start, end } = month
                        
                            return (
                                <div key={index}>
                                    <h4 className={`text-xs font-bold ${textColor}`}>{`${capitalizeFirstLetter(companyName)}${location===''?'':'-'} ${capitalizeFirstLetter(location)}`}<span className="italic text-[#2E4440]">{`${jobTitle===''?'':'-'} ${capitalizeFirstLetter(jobTitle)}`}</span></h4>
                                    <h5 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end}`}</h5>
                                    <ul className="list-disc pl-8 text-[#666666] text-[10px] mt-2">
                                    {jobItems.map((job, index)=>{
                                            return(
                                                <li key={index}>{job.jobDetail}</li>
                                            )
                                    })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
           
            {education[0].degree!==''&&
                <div className="mt-8">
                    <h3 className="uppercase text-xs text-[#424242]">education</h3>
                    <div className="mt-3">
                    {education.map((edu, index)=>{
                            const { schoolName, month, degree, course, location } = edu
                            const { start, end } = month

                            return (
                                <div key={index}>
                                    <h4 className={`text-xs font-bold ${textColor}`}>{`${capitalizeFirstLetter(schoolName)}`}<span className="italic text-[#2E4440]">{`${location!==''?'-':''} ${capitalizeFirstLetter(location)}`}</span></h4>
                                    <h5 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end}`}</h5>
                                    <h6 className="text-[#666666] text-[10px] mt-2">{`${capitalizeFirstLetter(degree)} ${capitalizeFirstLetter(course)}`}</h6>
                                </div>  
                            )
                    })}
                    </div>
                </div>
            }
        </div>
    )
}
