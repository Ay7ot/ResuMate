import { useColorContext } from "../../../Functions/useColorContext"
import { capitalizeFirstLetter } from '../../../Functions/capitalize'
import { useUserDetails } from "../../../Functions/useUserDetails"
import { useGeneralAppContext } from "../../../Functions/useGeneralAppContext"

export default function Cardiff() {

    const { itemRef, resumeFont } = useGeneralAppContext();
    const {  firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    
    const { currentColor } = useColorContext()
    const textColor = `text-${currentColor.color}`
    const borderColor = `border-${currentColor.color}`
    const fontStyle = `font-${resumeFont}`

    return (
        <div className={`${fontStyle} min-h-[841px] w-[595px] bg-[#ffffff] px-[5rem] pt-12`} ref={itemRef}>
            {firstName!==''&& 
            <div className={`${borderColor} border-t-4`}>
               <h2 className='text-[2rem] font-semibold pt-1 text-[#353744]`'>{`${capitalizeFirstLetter(firstName)} ${ capitalizeFirstLetter(lastName)}`}</h2> 
            </div>
            }
            <div>
                <h3 className={`${textColor} text-sm`}>{capitalizeFirstLetter(profession)}</h3>
                <div className='text-[10px] text-[#666666]'>
                    <p>{`${capitalizeFirstLetter(state)}${country===''?'':'-'} ${capitalizeFirstLetter(country)}`}</p>
                    {phoneNumber!==''&&  <p>{`${phoneNumber}`}</p>}
                    {email!=='' && <p>{`${email}`}</p>}
                </div>
            </div>

            {professionalSummary!=='' && 
                <div className='mt-4'>
                    <h4 className={`uppercase font-semibold ${textColor}`}>profesional summary</h4>
                    <p className='text-[10px] text-black'>{professionalSummary}</p>
                </div>
            }

            <div className='grid grid-cols-2 mt-4'>
               {skills[0].skill!==''&& 
                    <div>
                        <h4 className={`uppercase font-semibold ${textColor}`}>skills</h4>
                        <div className='mt-1'>
                            <ul className='list-disc pl-4 text-[10px] text-[#000000]'>
                                {skills.map((skill, index)=>{
                                    return (
                                        <li key={index}>{skill.skill}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                }
                {languages[0].language!==''&& 
                    <div>
                        <h4 className={`uppercase font-semibold ${textColor}`}>languages</h4>
                        <div className='mt-1'>
                            <ul className='list-disc pl-4 text-[10px] text-[#000000]'>
                                {languages.map((language, index)=>{
                                    return (
                                        <li key={index}>{language.language}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                }
            </div>
            {workHistory[0].jobTitle!=='' && 
                <div className='mt-4'>
                    <h4 className={`uppercase font-semibold ${textColor}`}>work history</h4>
                    <div className='flex flex-col gap-4'>
                        {workHistory.map((work, index)=>{
                            const {companyName, jobTitle, jobItems, location, month} = work
                            const {start, end} = month

                            return (
                                <div key={index}>
                                    <h5 className='font-bold text-xs'>{`${capitalizeFirstLetter(companyName)}${location===''?'':','} ${location}`} <span className='italic font-light'>{` ${capitalizeFirstLetter(jobTitle)}`}</span></h5>
                                    <h6 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end}`}</h6>
                                    <ul className='text-black text-[10px] pl-8 flex flex-col list-disc'>
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
                <div className='mt-4'>
                    <h4 className={`uppercase font-semibold ${textColor}`}>education</h4>
                    <div className='flex flex-col gap-4'>
                        {education.map((edu, index)=>{
                            const {schoolName, degree, course, location, month} = edu
                            const {start, end} = month

                            return (
                                <div key={index}>
                                    <h5 className='font-bold text-xs'>{`${capitalizeFirstLetter(schoolName)}${location===''?'':','} ${location}`}</h5>
                                    <h6 className="text-[10px] text-[#666666] mt-1">{`${start} ${end!==''?'-':''} ${end}`}</h6>
                                    <p className="text-[#666666] text-[10px] mt-2">{`${capitalizeFirstLetter(degree)} ${capitalizeFirstLetter(course)}`}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

