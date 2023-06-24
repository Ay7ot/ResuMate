import { RxCross1 } from "react-icons/rx";
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import { FcGoogle } from 'react-icons/fc'

export default function Login() {

    const { dispatch } = useGeneralAppContext()


    function hideLoginPage(){
        dispatch({
            type: 'setShowLogin',
            payload: {
                showLoginPayload: false
            }
        })
    }

    function showSignupPage(){
        dispatch({
            type: 'setShowSignup',
            payload: {
                showSignupPayload: true
            }
        })
        hideLoginPage()
    }

    return (
        <div className="absolute md:rounded-md flex flex-col justify-between top-0 md:left-[15%] lg:left-[25%] bg-white p-6 md:px-10 md:w-[70%] lg:w-[50%] w-full z-[999999999] min-h-[100dvh]">
            <div>
                <div className="flex items-center md:px-3 justify-between">
                    <div></div>
                    <div className="flex items-center gap-2">
                        <img 
                            src="resumateIcon.png"
                            className=""
                        />
                        <p className="text-[#192657] font-bold  text-lg md:text-[1.3rem]">ResuMate</p>
                    </div>
                    <i className='self-end text-[1.9rem]' onClick={hideLoginPage}><RxCross1 /></i>
                </div>
                <hr  className="mt-6"/>
                <h2 className="text-center mt-9 text-[#192657] text-[1.5rem] font-semibold">Login to Create Resume</h2>
                <form className="flex flex-col gap-3 mt-6">
                    <input 
                        type="email"
                        className="w-full outline-none border-b-[1px] border-[#9d9d9d] py-3 mb-1 text-[1rem]  focus:mt-3"
                        placeholder="Email"
                    />
                    <input 
                        type="password"
                        className="w-full outline-none border-b-[1px] border-[#9d9d9d] py-3 mb-1 text-[1rem] focus:mt-3"
                        placeholder="Password"
                    />
                    <button className="z-[99999] mt-14 md:mt-6 w-full text-center py-4 rounded-md gradient text-[#ffffff]">Login</button>
                </form>
                <div className="flex items-center justify-between gap-6 mt-8">
                    <div className="h-[1px] w-full border-[1px]"></div>
                    <p className="text-[#121212] text-[1.125rem]">or</p>
                    <div className="h-[1px] w-full border-[1px]"></div>
                </div>
                <button className="w-full py-[22px] mt-8 flex items-center justify-center gap-3 bg-[#F2F2F2] rounded-lg">
                    <i className="text-[1.7rem]"><FcGoogle /></i>
                    <p>Login with Google</p>
                </button>
            </div>
            <footer className="text-center text-[1.125rem]">Don't have an account? <span onClick={(e)=>{e.stopPropagation(); showSignupPage()}} className="py-1 border-b-[1px] border-[#192657] text-[#192657] cursor-pointer">Signup</span></footer>
        </div>
    )
}
