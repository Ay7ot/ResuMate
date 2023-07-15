import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'
import { DatePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import { getMonth } from '../../../Functions/useMonth'
import { nanoid } from 'nanoid'

export default function Education() {
    const { userDispatch, education } = useUserDetails()

    const [startDate, setStartDate] = useState<any>(null)
    const [endDate, setEndDate] = useState<any>(null)

    function updateSchoolName(id: string, schoolname: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        schoolName: schoolname
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function updateDegree(id: string, degree: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        degree: degree
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function updateCourse(id: string, course: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        course: course
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function updateLocation(id: string, location: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        location: location
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function updateStartDate(id: string, dateStarted: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        month: {
                            ...education.month,
                            start: dateStarted
                        }
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function updateEndDate(id: string, dateEnded: string){
        const toBeUpdated = education?.find(education=>education.id === id)
        if(toBeUpdated){
            const newEducation = education.map(education=>{
                if(education.id === toBeUpdated.id){
                    return {
                        ...education,
                        month: {
                            ...education.month,
                            end: dateEnded
                        }
                    }
                } else return education
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function addNewEducation(){
        const neweducation = {
            schoolName: '',
            degree: '',
            month: {
                start: '',
                end: '',
            },
            course: '',
            location: '',
            id: nanoid(),
            isShowing: true
        }

        const newEducation = [
            ...education.map(education=>{
                return {
                    ...education,
                    isShowing: false
                }
            }),
            neweducation
        ]

        userDispatch({
            type:'setEducation',
            payload: {
                educationPayload: newEducation
            }
        })
    }

    function deleteEducation(id: string){
        const toBeDeleted = education.find(education=>education.id === id)
        const newEducation = education.filter(education=>education.id!==toBeDeleted?.id)
        if(toBeDeleted){
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }

    function editEducation(id: string){
        const toBeEdited = education.find(education=>education.id === id)
        if(toBeEdited){
            const newEducation = education.map(education=>{
                if(education.id===toBeEdited.id){
                    return {
                        ...education,
                        isShowing: !toBeEdited.isShowing
                    }
                }else return {
                    ...education,
                    isShowing: false
                }
            })
            userDispatch({
                type: 'setEducation',
                payload: {
                    educationPayload: newEducation
                }
            })
        }
    }


    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8re   m] font-medium text-[#192657] '>Education</h2> 
            <p className='text-[#444444] text-sm lg:text-base'>Your diverse educational background gives you a unique perspective that will be an asset to the company.</p>
            
            {education.map((education, index) => {

                const {schoolName, degree, course, location, isShowing} = education

                return (
                    <div key={index} className=' mt-8 border-[1px] p-4 border-[#F1F1F1]'>
                        <div className='flex gap-4 md:gap-8'>
                            <i className='text-[2rem] text-[#9D9D9D]'>
                                <HiBars2 />
                            </i>
                            <div className='flex flex-col w-full'> 
                                <div>
                                <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>{`Education ${index+1}`}</h3>
                                <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>{`${ degree === '' ? 'Not Specified' : `${`${degree} ${course}`}`}`}</h4>
                                <p className='text-[#444444] text-xs md:text-sm'>{schoolName}</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${isShowing ? '' : 'hidden'}`}>
                            <div className='grid grid-cols-2 gap-6 mt-8'>
                                <input 
                                    value={degree}
                                    onChange={(e)=>{
                                        updateDegree(education.id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='Degree'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                                <input 
                                    value={course}
                                    onChange={(e)=>{
                                        updateCourse(education.id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='Course'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-6 mt-6'>
                                <DatePicker 
                                    value={startDate}
                                    onChange={(value)=>{
                                        setStartDate(value)
                                        const month = getMonth(value.$M+1)
                                        const newDate = `${month} ${value.$y}`
                                        updateStartDate(education.id, newDate)
                                    }}
                                    label="Start"
                                    views={['year', 'month']}
                                />
                                <DatePicker 
                                    value={endDate}
                                    onChange={(value)=>{
                                        setEndDate(value)
                                        const month = getMonth(value.$M+1)
                                        const newDate = `${month} ${value.$y}`
                                        updateEndDate(education.id, newDate)
                                    }}
                                    label="End"
                                    views={['year', 'month']}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-6 mt-4">
                                
                                <input 
                                    value={schoolName}
                                    onChange={(e)=>{
                                        updateSchoolName(education.id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='School'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                                <input 
                                    value={location}
                                    onChange={(e)=>{
                                    updateLocation(education.id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='Location'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-8'>
                            <button className='hover:text-blue-300' onClick={()=>editEducation(education.id)}><LuEdit /></button>
                            <button className='hover:text-blue-300' onClick={()=>deleteEducation(education.id)}><RiDeleteBinLine /></button>
                        </div>
                    </div>
                )
            })}

            <button onClick={addNewEducation} className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more education</p>
            </button>
        </section>
    )
}
