import { useColorContext } from "../../Functions/useColorContext"
import { capitalizeFirstLetter } from '../../Functions/capitalize'
import { useUserDetails } from "../../Functions/useUserDetails"

export default function Berlin({itemref}: {itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    const {  firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    
    const { currentColor } = useColorContext()
    const textColor = `text-${currentColor.color}`
    const borderColor = `border-${currentColor.color}`

    return (
        <div className='flex flex-col gap-6 min-h-[841px] w-[595px] bg-[#ffffff] pt-12 px-6' ref={itemref}>
            <div className='flex gap-[5%]'>
                <div className='w-[30%]'>
                    <h2 className='text-[1.5rem] text-black font-bold'>
                        {firstName!=='' && <span className='break-all'>{capitalizeFirstLetter(firstName)}</span>}
                        <br />
                        {lastName!==''&& <span className='break-all'>{capitalizeFirstLetter(lastName)}</span>}
                    </h2>
                    {profession!=='' && <h2 className={`${textColor} mt-1 text-sm break-all`}>{capitalizeFirstLetter(profession)}</h2>}
                </div>
                <div className={`w-[65%] border-t-4 pt-4 text-xs ${textColor} ${borderColor}`}>
                    {phoneNumber!=='' && <h3>{phoneNumber}</h3>}
                    {email!==''&& <h4>{email}</h4>}
                    <h6>{`${capitalizeFirstLetter(state)}${country===''?'':'-'} ${capitalizeFirstLetter(country)}`}</h6>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6'>
                {skills[0].skill!==''&&
                <div>
                    <h3 className='uppercase font-bold text-xs'>skills</h3>
                    <ul className={`list-disc pl-8 border-t-4  ${borderColor} mt-2 pt-3`}>
                        {skills.map((skill, index)=>{
                            return (
                                <li key={index}>{capitalizeFirstLetter(skill.skill)}</li>
                            )
                        })}
                    </ul>
                </div>
                }
                {languages[0].language!==''&&
                <div>
                    <h3 className='uppercase font-bold text-xs'>languages</h3>
                    <ul className={`list-disc pl-8 border-t-4  ${borderColor} mt-2 pt-3`}>
                        {languages.map((language, index)=>{
                            return (
                                <li key={index}>{capitalizeFirstLetter(language.language)}</li>
                            )
                        })}
                    </ul>
                </div>
                }
            </div>
            {professionalSummary!=='' && 
                <div className='flex gap-[5%]'>
                    <div className='w-[30%]'>
                        <div className='w-[30px] border-t-4 border-black'></div>
                        <h3 className='uppercase font-bold text-xs mt-2'>professional summary</h3>
                    </div>
                    <div className={`w-[65%] border-t-4 pt-2 text-[10px] ${borderColor}`}>
                        <p>{professionalSummary}</p>
                    </div>
                </div>
            }
            {workHistory[0].jobTitle!=='' && 
                <div className='flex gap-[5%]'>
                    <div className='w-[30%]'>
                        <div className='w-[30px] border-t-4 border-black'></div>
                        <h3 className='uppercase font-bold text-xs mt-2'>experience</h3>
                    </div>
                    <div className={`w-[65%] border-t-4 pt-2 text-[10px] flex flex-col gap-4 ${borderColor}`}>
                        {workHistory.map((work, index)=>{
                            const {companyName, jobTitle, jobItems, location, month} = work
                            const {start, end} = month

                            return (
                                <div key={index}>
                                    <h5 className='font-bold text-xs'>{`${capitalizeFirstLetter(companyName)}${jobTitle===''?'':'/'}`} <span className='italic font-light'>{` ${capitalizeFirstLetter(jobTitle)}`}</span></h5>
                                    <h6 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end} ${location}`}</h6>
                                    <ul className='text-black text-xs pl-8 flex flex-col list-disc mt-2'>
                                        {jobItems[0].jobDetail!=='' && jobItems.map((item, index)=>{
                                            return (
                                                <li key={index}>{item.jobDetail}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }

            {education[0].degree!=='' && 
                <div className='flex gap-[5%]'>
                    <div className='w-[30%]'>
                        <div className='w-[30px] border-t-4 border-black'></div>
                        <h3 className='uppercase font-bold text-xs mt-2'>education</h3>
                    </div>
                    <div className={`w-[65%] border-t-4 pt-2 text-[10px] flex flex-col gap-4 ${borderColor}`}>
                        {education.map((edu, index)=>{
                            const {schoolName, degree, course, location, month} = edu
                            const {start, end} = month

                            return (
                                <div key={index}>
                                    <h5 className='font-bold text-xs'>{`${capitalizeFirstLetter(schoolName)}${location===''?'':'-'}`} <span className='italic font-light'>{` ${capitalizeFirstLetter(location)}`}</span></h5>
                                    <h6 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end}`}</h6>
                                    <p className='text-10px mt-1'>{`${capitalizeFirstLetter(degree)} ${capitalizeFirstLetter(course)}`}</p>
                                    
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}
