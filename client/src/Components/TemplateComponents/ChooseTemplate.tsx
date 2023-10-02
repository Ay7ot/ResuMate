import { Link, useNavigate } from "react-router-dom"
import NavTemplates from "./NavTemplates"
import { useEffect, useRef } from 'react'
import useWindowDimensions from "../../windowDimensions"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"

export default function ChooseTemplate() {

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const modalRef = useRef<HTMLDivElement | null>(null)

    const { resumeTemplates, dispatch, darkTheme } = useGeneralAppContext()
    const { width } = useWindowDimensions()
    const navigateTo = useNavigate()

    useEffect(()=>{
        window.screenTop
    },[])

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            event.stopPropagation()
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                dispatch({
                    type: 'setResumeTemplates',
                    payload: {
                        resumeTemplatesPayload: resumeTemplates.map(template=>{
                            return {
                                ...template,
                                isSelected: false
                            }
                        })
                    }
                })
            }
        }

        window.addEventListener("click", handleClickOutside);
        return () => {
        window.removeEventListener("click", handleClickOutside);
        };
    }, [resumeTemplates, dispatch]);

    useEffect(()=>{
        const blurDivs = document.querySelectorAll('.blur-load')
        blurDivs.forEach(div=>{
            const img = div.querySelector('img')

            function loaded(){
                div.classList.add('loaded')
            }

            if(img?.complete){
                loaded()
            }else {
                img?.addEventListener('load', loaded)
            }
        })
    },[])

    function chooseTemplate(name: string){
        dispatch({
            type: 'setResumeTemplates',
            payload: {
                resumeTemplatesPayload: resumeTemplates.map(template=>{
                    if(template.name === name){
                        return {
                            ...template,
                            isSelected: true
                        }
                    }else return {
                        ...template,
                        isSelected: false
                    }
                })
            }
        })
        const selectedTemplate = resumeTemplates.find(template=>template.name===name)

        if(selectedTemplate?.isSelected===true && selectedTemplate.name===name){
            navigateTo('/edit-template', {state: selectedTemplate})
        }
    }

    return (
        <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#ffffff]'} dynamicHeight flex flex-col items-center justify-center pb-[5rem]`}>
            <NavTemplates />
            <img 
                src="pencils.png"
                alt="A desk pencil holder with two pencils and a brush"
                className="w-[50px] mb-8 mt-12"
            />
            <div ref={scrollRef} className="mx-5 md:mx-14 lg:mx-24 max-w-[800px]">
                <h2 className={`text-center text-[1.5rem] lg:text-[2rem] ${darkTheme ? 'text-[#ffebcd]':'text-[#192657]'} font-medium`}>Choose a resume template to start</h2>
                <p className={`text-center ${darkTheme ? 'text-[#f9f9f9]':'text-[#333333]'}  text-sm lg:text-base`}>Once you've selected your preferred template, our user-friendly resume builder will guide you through the customization process. Personalize the template with your own information, such as your contact details, work history, education, and skills.</p>
                <div ref={modalRef} className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {resumeTemplates.map((template, index)=>{
                        const image = `${template.name}-small.png`
                        return (
                            <div className="flex flex-col gap-3" key={index}>
                                {width > 768 ?
                                <div onClick={()=>chooseTemplate(template.name)} className=' cursor-pointer blur-load max-w-[270px] min-h-[220px] lg:min-h-[200px] md:min-h-[200px]'  style={{backgroundImage: `url(${image})`}}>
                                    <img
                                        src={template.image}
                                        loading="lazy"
                                        className={`${template.isSelected ? 'selected' : 'imageOutline'} border-[2px] ${darkTheme ? 'border-[#121212]' : 'border-[#ffffff]'} shadow-md w-full max-w-[270px] lazy-image object-cover object-center`}
                                    />
                                </div> :
                                <Link to='/edit-template' state={template}>
                                    <div className="imageOutline shadow-md blur-load max-w-[270px] min-h-[200px]" style={{backgroundImage: `url(${image})`}}>
                                        <img
                                            src={template.image}
                                            loading="lazy"
                                            className="w-full max-w-[270px] lazy-image object-cover object-center" 
                                        />
                                    </div>
                                </Link>
                                }
                                <p className="text-[#121212]">{template.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
