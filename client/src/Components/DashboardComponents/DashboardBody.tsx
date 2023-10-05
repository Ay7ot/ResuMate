import { useNavigate } from "react-router-dom"

export default function DashboardBody() {

    const navigateTo = useNavigate()

    function createNewResume() {
        navigateTo('/templates')
    }

    return (
        <section className="max-w-[600px] lg:max-w-[800px">
            <div className="flex items-end">
                <button onClick={createNewResume} className={`text-[#192657] hidden md:block rounded-md py-3 px-7 border-[1px] border-[#192657] newTemplateGradient font-medium duration-300 ease-in transition-colors`}>Create a new template</button>
            </div>
        </section>
    )
}
