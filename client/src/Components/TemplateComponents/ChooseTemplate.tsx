import { Link } from "react-router-dom"
import NavTemplates from "./NavTemplates"

export default function ChooseTemplate() {

    const resumeTemplates = [
        {
            name: 'Istanbul',
            image: 'Template1.png'
        },
        {
            name: 'Porto',
            image: 'Template2.png'
        },
        {
            name: 'Lisbon',
            image: 'Template3.png'
        },
        {
            name: 'Madrid',
            image: 'Template4.png'
        },
        {
            name: 'Kyiv',
            image: 'Template5.png'
        },
        {
            name: 'Cardiff',
            image: 'Template6.png'
        },
        {
            name: 'Milan',
            image: 'Template7.png'
        },
        {
            name: 'Berlin',
            image: 'Template8.png'
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center pb-[5rem]">
            <NavTemplates />
            <img 
                src="pencils.png"
                alt="A desk pencil holder with two pencils and a brush"
                className="w-[50px] mb-8 mt-12"
            />
            <div className="mx-5 md:mx-14 lg:mx-[190px]">
                <h2 className="text-center text-[1.5rem] lg:text-[2rem] text-[#192657] font-medium">Choose a resume template to start</h2>
                <p className="text-center text-[#444444] text-sm lg:text-base">Once you've selected your preferred template, our user-friendly resume builder will guide you through the customization process. Personalize the template with your own information, such as your contact details, work history, education, and skills.</p>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
                    {resumeTemplates.map((template)=>{
                        return (
                            <div className="flex flex-col items-center gap-3">
                                <Link to='/edit-template' state={template}>
                                    <div className="imageOutline shadow-lg">
                                        <img
                                            src={template.image}
                                            className="w-full max-w-[270px]" 
                                        />
                                    </div>
                                </Link>
                                <p className="text-[#121212]">{template.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
