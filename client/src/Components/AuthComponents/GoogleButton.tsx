import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function GoogleButton({buttonName}: {buttonName: string}) {
    
    const {dispatch} = useGeneralAppContext()

    const [isloading, setIsLoading] = useState(false)

    const provider = new GoogleAuthProvider()

    const navigateTo = useNavigate()

    async function signInWithGoogle(){
        setIsLoading(true)
        await signInWithPopup(auth, provider)
        .then(data=>{
            
            dispatch({
                type: 'setCurrentUser',
                payload: {
                    currentUserPayload: data.user
                }
            })
            navigateTo('/templates')
        })
        .catch(error=>{
            console.log(error)
        })
        setIsLoading(false)
    }
    return (
        <button onClick={signInWithGoogle} disabled={isloading} className="w-full py-[22px] mt-8 flex items-center justify-center gap-3 bg-[#F2F2F2] rounded-lg">
            <i className="text-[1.7rem]"><FcGoogle /></i>
            <p>{`${buttonName} with Google`}</p>
        </button>
    )
}
