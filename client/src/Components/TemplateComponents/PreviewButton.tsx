import { HiEye } from 'react-icons/hi2'
import { useColorContext } from "../../Functions/useColorContext"
import { Link } from 'react-router-dom'

export default function PreviewButton({template}: { template: string}) {

    const { currentColor } = useColorContext()
    const  backgroundColor = `bg-${currentColor.color}`
    
    return (
        <Link to='/preview' state={template}>
            <div className={`${backgroundColor} z-[9999] showPreview text-white lg:hover:bg-blue-300 transition-all duration-200 ease-in-out flex items-center gap-2 px-4 py-3 lg:p-3 shadow-md rounded-full`}>
                <p className='font-semibold'>Preview</p>
                <i className=' text-[2rem]'><HiEye /></i>
            </div>
        </Link>
    )
}
