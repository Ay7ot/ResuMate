import {FaPlus} from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'
import {nanoid} from 'nanoid'

export default function Skill(){

    const {skills, userDispatch} = useUserDetails()

    function updateSkill(id: string, newskill: string){
        const toBeUpdated = skills?.find(skill=>skill.id === id)
        if(toBeUpdated){
            const newSkills = skills.map(skill=>{
                if(skill.id === toBeUpdated.id){
                    return {
                        ...skill,
                        skill: newskill
                    }
                } else return skill
            })
            userDispatch({
                type: 'setSkills',
                payload: {
                    skillsPayload: newSkills
                }
            })
        }
    }

    function addNewSkill(){
        const newSkill = {
            skill:'',
            id: nanoid(),
            isShowing: true
        }

        const newSkills = [
            ...skills.map(skill=>{
                return {
                    ...skill,
                    isShowing: false
                }
            }),
            newSkill
        ]

        userDispatch({
            type:'setSkills',
            payload: {
                skillsPayload: newSkills
            }
        })
    }

    function deleteSkill(id: string){
        const toBeDeleted = skills.find(skill=>skill.id === id)
        const newSkills = skills.filter(skill=>skill.id!==toBeDeleted?.id)
        if(toBeDeleted){
            userDispatch({
                type: 'setSkills',
                payload: {
                    skillsPayload: newSkills
                }
            })
        }
    }

    function editSkills(id: string){
        const toBeEdited = skills.find(skill=>skill.id === id)
        if(toBeEdited){
            const newSkills = skills.map(skill=>{
                if(skill.id===toBeEdited.id){
                    return {
                        ...skill,
                        isShowing: !toBeEdited.isShowing
                    }
                }else return {
                    ...skill,
                    isShowing: false
                }
            })
            userDispatch({
                type: 'setSkills',
                payload: {
                    skillsPayload: newSkills
                }
            })
        }
    }

    return (
        <section className='mt-[3rem]'>
            <h2 className='text-[1.5rem] lg:text-[1.8rem] font-medium text-[#192657] '>Skills</h2> 
            <p className='text-[#444444] text-sm lg:text-base'>Choose atleast 5 skills that shows that you are fit for the position</p>

            <div className='mt-8 flex flex-col gap-3'>
                {skills.map((mainSkill, index)=>{
                    const {skill, id, isShowing} = mainSkill
                    return (
                        <div key={index} className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                            <i className='text-[2rem] text-[#9D9D9D]'>
                                <HiBars2 />
                            </i>
                            <div className='flex flex-col w-full'>
                                <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>{`Skill ${index+1}`}</h3>
                                <h4 className='text-[#192657] font-medium text-base lg:text-[1.25rem] mt-2'>{skill===''? 'Not Specified' : `${skill}`}</h4>
                                <input 
                                    value={skill}
                                    onChange={(e)=>{
                                        updateSkill(id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='Skill'
                                    className={`${isShowing ? '' : 'hidden'} outline-none rounded-none text-[#192657] font-bold placeholder:font-normal placeholder:text-[#444444] text-[14px] py-2 border-b-[1px] border-[#444444]`}
                                />
                                <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-4'>
                                    <i onClick={()=>editSkills(id)}><LuEdit /></i>
                                    <i onClick={()=>deleteSkill(id)}><RiDeleteBinLine /></i>
                                </div>
                            </div>
                        </div>
                            
                    )
                })}
            </div>
            <button onClick={addNewSkill} className='text-[#192657] gap-3 font-medium flex items-center mt-6'>
                <FaPlus />
                <p>add more skill</p>
            </button>
        </section>
    )
}
