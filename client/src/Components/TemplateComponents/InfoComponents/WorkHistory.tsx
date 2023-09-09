import { FiBold, FiItalic, FiUnderline } from 'react-icons/fi'
import {useState} from 'react'
import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'
import { DatePicker } from '@mui/x-date-pickers';
import { getMonth } from '../../../Functions/useMonth'
import {  BsDot } from 'react-icons/bs'
import { nanoid } from 'nanoid'

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
            setStartDate(null)
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
            setEndDate(null)
        }
    }

    function addNewWorkHistory(){
        const newWork = {
            jobTitle: '',
            month: {
                start: '',
                end: '',
            },
            companyName: '',
            jobItems: [{
                jobDetail: '',
                id: nanoid()
            }],
            location: '',
            id: nanoid(),
            isShowing: true
        }

        const newWorkHistory = [
            ...workHistory.map(work=>{
                return {
                    ...work,
                    isShowing: false
                }
            }),
            newWork
        ]

        userDispatch({
            type:'setWorkHistory',
            payload: {
                workHistoryPayload: newWorkHistory
            }
        })
    }


    function deleteJobHistory(id: string){
        const toBeDeleted = workHistory.find(work=>work.id === id)
        const newWorkHistory = workHistory.filter(work=>work.id!==toBeDeleted?.id)
        if(toBeDeleted){
            userDispatch({
                type: 'setWorkHistory',
                payload: {
                    workHistoryPayload: newWorkHistory
                }
            })
        }
    }
    function editJobHistory(id: string){
        const toBeEdited = workHistory.find(work=>work.id === id)
        if(toBeEdited){
            const newWorkHistory = workHistory.map(work=>{
                if(work.id===toBeEdited.id){
                    return {
                        ...work,
                        isShowing: !toBeEdited.isShowing
                    }
                }else return {
                    ...work,
                    isShowing: false
                }
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

                const { jobTitle, companyName, location, jobItems, isShowing } = work

                return (
                    <div key={index} className='mt-8 border-[1px] p-4 border-[#F1F1F1]'>
                        <div className='flex gap-4 md:gap-8'>
                            <i className='text-[2rem] text-[#9D9D9D]'>
                                <HiBars2 />
                            </i>
                            <div className='flex flex-col w-full'> 
                                <div>
                                    <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>{`Work History ${index+1}`}</h3>
                                    <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>{`${jobTitle ===''? 'Not Specified' : `${`${jobTitle} ${companyName ==='' ? '' : `at ${companyName}`}`}`}`}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={`${isShowing? '': 'hidden'} transition-all duration-150`}>    
                            <div className='grid grid-cols-2 gap-6 mt-6'>
                                <input 
                                    type="text" 
                                    value={jobTitle}
                                    onChange={(e)=>{
                                        updateJobTitle(work.id, e.target.value)
                                    }}
                                    placeholder='Job Title'
                                    className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
                                />
                                <input 
                                    type="text" 
                                    value={companyName}
                                    onChange={(e)=>{
                                        updateCompanyName(work.id, e.target.value)
                                    }}
                                    placeholder='Company Name'
                                    className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
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
                                        slotProps={{
                                            actionBar: {
                                              actions: ["today"],
                                            }
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
                                    className='outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]'
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
                                    <hr className='mt-3 border-[rgb(196,196,196)] border-t-[1px]'/>
                                    <div className='flex flex-col gap-3 mt-6 min-h-[100px]'>
                                        {jobItems.map((item, index)=>{
                                            return (
                                                <div key={index} className='flex justify-between'>
                                                    <div className='flex items-center gap-2 w-full'>
                                                        <i><BsDot /></i>
                                                        <input
                                                            style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                                                            autoFocus={index > 0 && jobItems.length-1===index ? true : false}
                                                            className='outline-none bg-[#fafafa] text-[#192657] min-h-[1rem] w-[90%]'
                                                            value={item.jobDetail} 
                                                            onChange={(e)=>{
                                                                const newWorkHistory = workHistory.map(newwork=>{
                                                                    if(newwork.id === work.id){
                                                                        return {
                                                                            ...newwork,
                                                                            jobItems: newwork.jobItems.map(newItem=>{
                                                                                if(newItem.id === item.id){
                                                                                    return {
                                                                                        ...newItem,
                                                                                        jobDetail: e.target.value
                                                                                    }
                                                                                }else return newItem
                                                                            })
                                                                        }
                                                                    }else return newwork
                                                                })
                                                                userDispatch({
                                                                    type: 'setWorkHistory',
                                                                    payload: {
                                                                        workHistoryPayload: newWorkHistory
                                                                    }
                                                                })
                                                            }}

                                                            onKeyUp={(e)=>{
                                                                if(e.key==='Enter'){
                                                                    const newWorkHistory = workHistory.map(newwork=>{
                                                                        if(newwork.id === work.id){
                                                                            return {
                                                                                ...newwork,
                                                                                jobItems: [
                                                                                    ...newwork.jobItems,
                                                                                    {
                                                                                        jobDetail: '',
                                                                                        id: nanoid()
                                                                                    }
                                                                                ]
                                                                            }
                                                                        }else return newwork
                                                                    })
                                                                    userDispatch({
                                                                        type: 'setWorkHistory',
                                                                        payload: {
                                                                            workHistoryPayload: newWorkHistory
                                                                        }
                                                                    })
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <button 
                                                        onClick={()=>{
                                                            const newWorkHistory = workHistory.map(newWork=>{
                                                                if(newWork.id===work.id && newWork.jobItems.length > 1){
                                                                    return {
                                                                        ...newWork,
                                                                        jobItems: newWork.jobItems.filter(newItem=>newItem.id !== item.id)
                                                                    }
                                                                }else return newWork
                                                            })
                                                            userDispatch({
                                                                type: 'setWorkHistory',
                                                                payload: {
                                                                    workHistoryPayload: newWorkHistory
                                                                }
                                                            })
                                                        }} 
                                                        className='text-[#9d9d9d]'
                                                    >
                                                        <RiDeleteBinLine />
                                                    </button>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 flex items-center justify-end text-[#9D9D9D] gap-3'>
                            <button className='hover:text-blue-300' onClick={()=>editJobHistory(work.id)}><LuEdit /></button>
                            <button className='hover:text-blue-300' onClick={()=>deleteJobHistory(work.id)}><RiDeleteBinLine /></button>
                        </div>
                    </div>
                )
            })}
            
            <button onClick={addNewWorkHistory} className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more work history</p>
            </button>
        </section>

    )
}
