import axios from "axios"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"
import { useQuery } from 'react-query'

export default function DashboardBody() {

    const { currentUser } = useGeneralAppContext()
    const name = currentUser?.displayName || 'User'

    async function fetchResumes() {
        const firebaseUid = currentUser?.uid;
        const resumesInfo = await axios.get(`${import.meta.env.VITE_SERVER_URL}userResume/resume`, {
            params: { firebaseUid } // Send firebaseUid as a query parameter
        })
        return resumesInfo.data.message
    }

    const { data, isLoading, error } = useQuery('resumes', fetchResumes)

    console.log(data)
    return (
        <section className=" w-full py-6 md:pt-16 px-8 md:px-16">
            <div className=" border-b-[1px] py-4">
                <h2 className="text-[#121212] text-[1.5rem] font-medium leading-[3rem] md:text-[2rem]">{`Hello ${name}`}</h2>
                <p className="text-[#9d9d9d] leading-6">Create your Resume</p>
            </div>
            <div className="mt-8">
                <h3 className="text-[121212] font-medium leading-8">My Resumes</h3>

            </div>
        </section>
    )
}
