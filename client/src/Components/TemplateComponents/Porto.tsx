import { capitalizeFirstLetter } from "../../Functions/capitalize"
import { useUserDetails } from "../../Functions/useUserDetails"

export default function Porto({itemref}:{itemref: React.MutableRefObject<HTMLDivElement | null>}) {

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()

    function useComponent(){
        if(email!==''||phoneNumber!==''||state!=='' || country!==''){
            return <h2 className="text-xs font-semibold text-[#333333]">CONTACT</h2>
        } else return <></>
    }

    return (
        <div className=' min-h-[841px] w-[595px] bg-[#ffffff]' ref={itemref}>
            <section className="bg-[#4FC133] p-6 min-h-[97px]">
                <h1 className="text-[2rem] text-white font-semibold">{`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`}</h1>
            </section>
            <div className="flex min-h-[744px]">
                <div className="w-[70%] p-6">
                    {professionalSummary!=='' &&  <p className='text-[#333333] text-[10px]'>{professionalSummary} </p>}
                    {workHistory.length > 0 && workHistory[0].jobTitle!=='' &&
                    <section className='mt-6'>
                        <h2 className='text-[#4FC133] text-xs font-semibold'>WORK EXPERIENCE</h2>
                        <hr />
                        {workHistory.map((work, index)=>{
                            const {jobItems, jobTitle, companyName, month} = work
                            const {start, end} = month
                            return (
                                <div key={index} className='flex gap-4 mt-3'>
                                    <div className=" w-[22%]">
                                        <p className="text-[10px] text-[#333333]">{`${start} -`}</p>
                                        <p className="text-[10px] text-[#333333]">{`${end}`}</p>
                                    </div>
                                    <div className="w-[78%]">
                                        <h3 className='text-[#4FC133] text-[10px]'>{jobTitle.toUpperCase()}</h3>
                                        <h4 className="text-[10px] text-[#333333]">{capitalizeFirstLetter(companyName)}</h4>
                                        {jobItems[0].jobDetail !== '' &&
                                            <ul className="list-disc pl-6">
                                                {jobItems.map((jobInfo, index)=>{
                                                    return (
                                                        <li key={index} className="text-[10px] text-[#7D7D7D] mt-2 ">{jobInfo.jobDetail}</li>
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
                    {education[0].degree!==''&&
                    <section className='mt-6'>
                        <h2 className='text-[#4FC133] text-xs font-semibold'>EDUCATION</h2>
                        <hr />
                        {education.map((edu, index)=>{
                            const {schoolName, month, degree, course, location} = edu
                            const {start, end} = month
                            return (
                                <div key={index} className='flex gap-4 mt-3'>
                                    <div className=" w-[22%]">
                                        <p className="text-[10px] text-[#333333]">{`${start} -`}</p>
                                        <p className="text-[10px] text-[#333333]">{`${end}`}</p>
                                    </div>
                                    <div>
                                        <h3 className='text-[#4FC133] text-[10px]'>{`${degree.toUpperCase()} ${capitalizeFirstLetter(course)}`}</h3>
                                        <h4 className="text-[10px] text-[#333333]">{schoolName}</h4>
                                        <h5 className="text-[10px] italic text-[#7D7D7D] mt-3">{capitalizeFirstLetter(location)}</h5>
                                    </div>
                                </div>
                            )
                        })}
                    </section>
                    }
                </div>
                
                <div className="w-[30%] p-6 bg-[#f4f5fd]">
                    {profession!=='' && <h2 className="text-xs text-[#333333] font-semibold mb-4">{profession.toUpperCase()}</h2>}
                    <section>
                        {useComponent()}
                        {state!=='' && 
                        <div className="mt-2">
                            <h3 className="text-[10px] font-semibold text-[#333333]">Address</h3>
                            <p className="text-[10px] text-[#7D7D7D]">{`${capitalizeFirstLetter(state)}, ${capitalizeFirstLetter(country)}`}</p>
                        </div>
                        }
                        {phoneNumber!=='' &&
                        <div className="mt-2">
                            <h3 className="text-[10px] font-semibold text-[#333333]">Phone Number</h3>
                            <p className="text-[10px] text-[#7D7D7D]">{phoneNumber}</p>
                        </div>
                        }
                        {email!=='' && 
                        <div className="mt-2">
                            <h3 className="text-[10px] font-semibold text-[#333333]">Email</h3>
                            <p className="text-[10px] text-[#7D7D7D]">{email}</p>
                        </div>
                        }
                    </section>
                    {skills[0].skill!=='' && 
                    <section className="mt-4">
                        <h2 className="text-xs font-semibold text-[#333333]">SKILLS</h2>
                        <ul className="px-4 list-disc mt-3">
                            {skills.map((skill, index)=>{
                                return (
                                    <li key={index} className="text-[10px] mt-2 text-[#7D7D7D]">{capitalizeFirstLetter(skill.skill)}</li>
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
                                    <li key={index} className="text-[10px] mt-2 text-[#7D7D7D]">{capitalizeFirstLetter(language.language)}</li>
                                )
                            })}
                        </ul>
                    </section>
                    }
                </div>
            </div>
        </div>
    )
}
