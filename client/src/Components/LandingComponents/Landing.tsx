import {useEffect, useRef} from 'react'
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext";
import LandingBody from "./LandingBody";
import Navlanding from "./Navlanding";
import {RxCross1} from 'react-icons/rx';

export default function Landing() {

  const {navShown, dispatch} = useGeneralAppContext()

  const navref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation()
      if (navref.current && !navref.current.contains(event.target as Node)) {
        dispatch({
          type: 'hideNavBar'
        })
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  });

  function hideNavBar(){

    dispatch({
      type: 'hideNavBar'
    })
  }

  return (
    <>
      <div className={`${navShown ? 'opacity-75 blur-sm ease-in transition-all duration-150' : ''}`}>
        <Navlanding />
        <LandingBody />
      </div>
      <div ref={navref} className={`${navShown ? 'flex' : 'hidden'} md:hidden py-4 px-8 transition-all duration-150 flex-col ease-in z-[999999] top-0 right-0 absolute h-screen bg-[#f4f5fd] min-w-[250px]`}>
        <i className='self-end text-[1.9rem]' onClick={hideNavBar}><RxCross1 /></i>
      </div>
    </>
  )
}
