import { FaPlus } from 'react-icons/fa'
import { LuEdit } from 'react-icons/lu'
import { RiDeleteBinLine } from 'react-icons/ri'
import { HiBars2 } from 'react-icons/hi2'
import { useUserDetails } from '../../../Functions/useUserDetails'
import {nanoid} from 'nanoid'
import { useGeneralAppContext } from '../../../Functions/useGeneralAppContext'

export default function Language() {

    const { userDispatch, languages } = useUserDetails()
    const { darkTheme } = useGeneralAppContext()

    function updateLanguage(id: string, newLanguage: string){
        const toBeUpdated = languages?.find(language=>language.id === id)
        if(toBeUpdated){
            const newLanguages = languages.map(language=>{
                if(language.id === toBeUpdated.id){
                    return {
                        ...language,
                        language: newLanguage
                    }
                } else return language
            })
            userDispatch({
                type: 'setLanguages',
                payload: {
                    languagesPayload: newLanguages
                }
            })
        }
    }

    function addNewLanguage(){
        const newLanguage = {
            language:'',
            id: nanoid(),
            isShowing: true
        }

        const newSkills = [
            ...languages.map(language=>{
                return {
                    ...language,
                    isShowing: false
                }
            }),
            newLanguage
        ]

        userDispatch({
            type:'setLanguages',
            payload: {
                languagesPayload: newSkills
            }
        })
    }

    function deleteLanguage(id: string){
        const toBeDeleted = languages.find(language=>language.id === id)
        const newLanguages = languages.filter(language=>language.id!==toBeDeleted?.id)
        if(toBeDeleted){
            userDispatch({
                type: 'setLanguages',
                payload: {
                    languagesPayload: newLanguages
                }
            })
        }
    }

    function editLanguage(id: string){
        const toBeEdited = languages.find(language=>language.id === id)
        if(toBeEdited){
            const newLanguages = languages.map(language=>{
                if(language.id===toBeEdited.id){
                    return {
                        ...language,
                        isShowing: !toBeEdited.isShowing
                    }
                }else return {
                    ...language,
                    isShowing: false
                }
            })
            userDispatch({
                type: 'setLanguages',
                payload: {
                    languagesPayload: newLanguages
                }
            })
        }
    }


    return (
        <section className='mt-[3rem]'>
            <h2 className={`text-[1.5rem] lg:text-[1.8rem] font-medium ${darkTheme ? "text-[#ffebcd]" : "text-[#192657]"} `}>Language</h2> 

            <div className='mt-8 flex flex-col gap-3'>
                {languages.map((languageItems, index)=>{
                    const {language, id, isShowing} = languageItems
                    return (
                        <div key={index} className='border-[1px] p-4 border-[#F1F1F1] flex gap-8'>
                            <i className='text-[2rem] text-[#9D9D9D]'>
                                <HiBars2 />
                            </i>
                            <div className='flex flex-col w-full'>
                                <h3 className='text-[10px] md:text-xs text-[#9D9D9D]'>{`Language ${index+1}`}</h3>
                                <h4 className={`${darkTheme ? "text-[#ffebcd]" : "text-[#192657]"} font-medium text-base lg:text-[1.25rem] mt-2`}>{language===''? 'Not Specified' : `${language}`}</h4>
                                <input 
                                    value={language}
                                    onChange={(e)=>{
                                        updateLanguage(id, e.target.value)
                                    }}
                                    type="text" 
                                    placeholder='Language'
                                    className={`${isShowing ? '' : 'hidden'} outline-none rounded-none ${darkTheme ? 'bg-[#121212] text-[#ffebcd]' : 'bg-[#ffffff] text-[#192657] placeholder:text-[#444444]'} font-bold placeholder:font-normal  text-[14px] py-2 border-b-[1px] border-[#444444]`}
                                />
                                <div className='flex items-center justify-end text-[#9D9D9D] gap-3 mt-4'>
                                    <i onClick={()=>editLanguage(id)}><LuEdit /></i>
                                    <i onClick={()=>deleteLanguage(id)}><RiDeleteBinLine /></i>
                                </div>
                            </div>
                        </div>
                            
                    )
                })}
            </div>
            <button onClick={addNewLanguage} className={`${darkTheme ? "text-[#ffebcd]" : "text-[#192657]"} gap-3 font-medium flex items-center mt-6`}>
                <FaPlus />
                <p>add new language</p>
            </button>
        </section>
    )
}
