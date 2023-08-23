import { capitalizeFirstLetter } from "../../../Functions/capitalize";
import { useColorContext } from "../../../Functions/useColorContext";
import { useGeneralAppContext } from "../../../Functions/useGeneralAppContext";
import { useUserDetails } from "../../../Functions/useUserDetails";

export default function Lisbon() {

    const { itemRef, resumeFont } = useGeneralAppContext();

    const { firstName, lastName, phoneNumber, email, profession, professionalSummary, workHistory, education, country, state, skills, languages } = useUserDetails()
    const {currentColor} = useColorContext()

    const bgColor = `bg-${currentColor.color}`
    const textColor = `text-${currentColor.color}`
    const fontStyle = `font-${resumeFont}`

    return (
        <div className={`${fontStyle} min-h-[841px] w-[595px] bg-[#f4f5fd] relative`} ref={itemRef}>
            <div className={`${bgColor} p-6 text-[#ffffff] transition-all duration-200 ease-in`}>
                <h1 className="text-[2rem] font-semibold">{`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`}</h1>
                <h2 className="text-xs font-semibold text-[#ffffff] mt-2">{capitalizeFirstLetter(profession)}</h2>
                <div className="mt-3">
                    {state!=='' && <p className="text-[10px] font-semibold mt-1">Address <span className="font-normal"> {`${capitalizeFirstLetter(state)} , ${capitalizeFirstLetter(country)}`}</span></p>}
                    {phoneNumber!=='' && <p className="text-[10px] font-semibold mt-1">Phone Number <span className="font-normal">{phoneNumber}</span></p>}
                    {email!=='' && <p className="text-[10px] font-semibold mt-1">Email Address <span className="font-normal">{email}</span></p>}
                </div>
            </div>

            <div className="p-6">
                <p className="text-[#33333] text-[10px]">{professionalSummary}</p>
                
               <div className="grid grid-cols-2 gap-6">
                    {skills[0].skill!=='' &&
                    <section className="mt-2">
                        <h2 className={`${textColor} text-xs font-semibold mb-1`}>SKILLS</h2>
                        <hr className="border-t-[1px] border-[#C4C4C4]"/>
                        <div className="flex justify-between gap-3 mt-2">
                            <div className="w-[20%]">

                            </div>
                            <ul className="w-[80%] pl-4 list-disc text-[#333333]">
                            {skills.map((skill, index)=>{
                                    return (
                                        <li key={index} className="text-[10px] mt-1">{capitalizeFirstLetter(skill.skill)}</li>
                                    )
                            })}
                            </ul>
                        </div>
                    </section>
                    }
                    {languages[0].language!=='' &&
                    <section className="mt-2">
                        <h2 className={`${textColor} text-xs font-semibold mb-1`}>LANGUAGES</h2>
                        <hr className="border-t-[1px] border-[#C4C4C4]"/>
                        <div className="flex justify-between gap-3 mt-2">
                            <div className="w-[20%]">

                            </div>
                            <ul className="w-[80%] pl-4 list-disc text-[#333333]">
                            {languages.map((language, index)=>{
                                return (
                                    <li key={index} className="text-[10px] mt-1">{capitalizeFirstLetter(language.language)}</li>
                                )
                            })}
                            </ul>
                        </div>
                    </section>
                    }

               </div>
                {workHistory[0].jobTitle !== '' && 
                <section className="mt-2">
                    <h2 className={`${textColor} text-xs font-semibold mb-1`}>WORK EXPERIENCE</h2>
                    <hr className="border-t-[1px] border-[#C4C4C4]"/>
                    {workHistory.map((work, index)=>{
                        const {jobItems, jobTitle, companyName, month} = work
                        const {start, end} = month
                        return (
                            <div key={index} className="flex justify-between gap-3 mt-2">
                                <div className="w-[20%]">
                                    <p className="text-[#333333] text-[10px]">{`${start} ${end===''?'': '-'}`}<br />{`${end}`}</p>
                                </div>
                                <div className="w-[80%]">
                                    <h3 className={`text-[10px] ${textColor}`}>{jobTitle.toUpperCase()}</h3>
                                    <h4 className="text-[10px] mt-1 text-[#7D7D7D] italic">{capitalizeFirstLetter(companyName)}</h4>
                                    <ul className="list-disc pl-4 text-[#333333]">
                                        {jobItems.map((item, index)=>{
                                            return (
                                                <>
                                                    {item.jobDetail!=='' && <li key={index} className="text-[10px] mt-1 ">{item.jobDetail}</li>}
                                                </>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        )
                    })}
                </section>
                }
                {education[0].degree!=='' && 
                <section className="mt-2">
                    <h2 className={`${textColor} text-xs font-semibold mb-1`}>EDUCATION</h2>
                    <hr className="border-t-[1px] border-[#C4C4C4]"/>
                    {education.map((education, index)=>{
                        const {course, degree, schoolName, location, month} = education
                        const {start, end} = month
                        return (
                            <div key={index} className="flex justify-between gap-3 mt-3">
                                <p className="text-[10px] text-[#333333] w-[20%]">
                                    {`${start} ${end!=='' ? '-' : ''}`}<br />
                                    {end}
                                </p>
                                <div className="w-[80%]">
                                    <h3 className={`${textColor} text-[10px]`}>{`${degree.toUpperCase()} ${capitalizeFirstLetter(course)}`}</h3>
                                    <h4 className="text-[10px] text-[#333333]">{capitalizeFirstLetter(schoolName)}</h4>
                                    <h5 className="text-[10px] italic text-[#7D7D7D]">{capitalizeFirstLetter(location)}</h5>
                                </div>
                            </div>
                        )
                    })}
                </section>
               }
            </div>
        </div>
    )
}
