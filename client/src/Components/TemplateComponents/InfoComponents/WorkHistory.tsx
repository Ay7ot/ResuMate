import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import {useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'
import { DatePicker } from '@mui/x-date-pickers';
import { getMonth } from '../../../Functions/useMonth'
import { BsChevronDown } from 'react-icons/bs'

export default function WorkHistory() {

    const { userDispatch, workHistory } = useUserDetails()

    const [startDate, setStartDate] = useState<any>(null)
    const [endDate, setEndDate] = useState<any>(null)

    function updateJobTitle(id: string, jobtitle: string){
        const toBeUpdated = workHistory?.find(work=>work.id === id)
        if(toBeUpdated){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id === toBeUpdated.id){
                    return {
                        ...work,
                        jobTitle: jobtitle
                    }
                } else return work
            })
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }

    function updateCompanyName(id: string, companyname: string){
        const toBeUpdated = workHistory?.find(work=>work.id === id)
        if(toBeUpdated){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id === toBeUpdated.id){
                    return {
                        ...work,
                        companyName: companyname
                    }
                } else return work
            })
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }

    function updateCompanyLocation(id: string, companylocation: string){
        const toBeUpdated = workHistory?.find(work=>work.id === id)
        if(toBeUpdated){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id === toBeUpdated.id){
                    return {
                        ...work,
                        location: companylocation
                    }
                } else return work
            })
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }

    function updateStartDate(id: string, dateStarted: string){
        const toBeUpdated = workHistory?.find(work=>work.id === id)
        if(toBeUpdated){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id === toBeUpdated.id){
                    return {
                        ...work,
                        month: {
                            ...work.month,
                            start: dateStarted
                        }
                    }
                } else return work
            })
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }

    function updateEndDate(id: string, dateEnded: string){
        const toBeUpdated = workHistory?.find(work=>work.id === id)
        if(toBeUpdated){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id === toBeUpdated.id){
                    return {
                        ...work,
                        month: {
                            ...work.month,
                            end: dateEnded
                        }
                    }
                } else return work
            })
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }

    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Work History</h2>
            <p className='text-[#444444] text-sm lg:text-base'>Show your relevant work experience</p>
            
            {workHistory.map((work, index)=>{

                const { jobTitle, companyName, location } = work

                return (
                    <div key={index} className='mt-8 border-[1px] p-4 border-[#F1F1F1]'>
                        <div className='flex gap-4 md:gap-8'>
                            <i className='text-[2rem] text-[#9D9D9D]'>
                                <HiBars2 />
                            </i>
                            <div className='flex flex-col w-full'>
                            <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>{`Work History ${index+1}`}</h3>
                                        <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>{`${jobTitle ===''? 'Not Specified' : `${`${jobTitle} ${companyName ==='' ? '' : `at ${companyName}`}`}`}`}</h4>
                                    </div>
                                    <i className='text-[#192657]'><BsChevronDown /></i>
                            </div>
                            </div>
                        </div>
                        <div className={``}>    
                            <div className='grid grid-cols-2 gap-6 mt-6'>
                                <input 
                                    type="text" 
                                    value={jobTitle}
                                    onChange={(e)=>{
                                        updateJobTitle(work.id, e.target.value)
                                    }}
                                    placeholder='Job Title'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                                <input 
                                    type="text" 
                                    value={companyName}
                                    onChange={(e)=>{
                                        updateCompanyName(work.id, e.target.value)
                                    }}
                                    placeholder='Company Name'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                            </div>
                            <div className='grid grid-cols-2 gap-6 mt-6'>
                                <div className='grid grid-cols-2 gap-6'>
                                <DatePicker 
                                        value={startDate}
                                        onChange={(value)=>{
                                            setStartDate(value)
                                            const month = getMonth(value.$M+1)
                                            const newDate = `${month} ${value.$y}`
                                            updateStartDate(work.id, newDate)
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
                                            updateEndDate(work.id, newDate)
                                        }}
                                        label="End"
                                        views={['year', 'month']}
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    value={location}
                                    onChange={(e)=>{
                                        updateCompanyLocation(work.id, e.target.value)
                                    }}
                                    placeholder='Location'
                                    className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                            </div>
                            <div className='mt-6'>
                                <h3 className='text-[#444444] text-[14px] font-medium'>Description</h3>
                                <div className='mt-2 bg-[#fafafa] px-3 md:px-6 py-4'>
                                    <div className='flex gap-3'>
                                        <i><FiBold /></i>
                                        <i><FiItalic /></i>
                                        <i><FiUnderline /></i>
                                    </div>
                                    <hr className='mt-3 border-[#C4C4C4] border-t-[1px]'/>
                                    <textarea 
                                        className='outline-none rounded-none text-[#444444] placeholder:text-[#444444] w-full text-sm md:text-base bg-[#FAFAFA] placeholder:italic mt-3'
                                        rows={6}
                                        placeholder='e.g. I am a highly motivated and experienced language model with a knack for learning new things ...'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex items-center justify-end text-[#9D9D9D] gap-3'>
                            <i><LuEdit /></i>
                            <i><RiDeleteBinLine /></i>
                        </div>
                    </div>
                )
            })}
            
            <button className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more work history</p>
            </button>
        </section>

    )
}
