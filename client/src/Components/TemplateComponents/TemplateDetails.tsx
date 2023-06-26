import {IoChevronBack} from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export default function TemplateDetails() {
    
    const history = useNavigate()
    
    function goBack(){
        history(-1)
    }
    
    return (
        <div>
            <button onClick={goBack} className='flex items-center gap-1 text-[#192657] font-medium'>
                <i className='text-[#444444] '><IoChevronBack /></i>
                <p>Back</p>
            </button>
        </div>
    )
}
