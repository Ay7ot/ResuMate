import { useLocation } from "react-router-dom"
import Istanbul from "./Istanbul"
import { useRef, useEffect } from "react"
import Porto from "./Porto"
import Lisbon from "./Lisbon"
import Madrid from "./Madrid"
import TemplateDetails from "./TemplateDetails"
import { UserDetailsProvider } from "../../Contexts/UserDetailContext"
import TemplateStyles from "./TemplateStyles"

export default function EditTemplate() {

    const location = useLocation()
    const template = location.state

    
    const itemref = useRef<HTMLDivElement | null>(null)

    useEffect(()=>{
      window.scrollTo(0,0)
    })
    
    return (
      <UserDetailsProvider>
        <div className='flex lg:w-screen h-[100dvh]'>
          <div className='pt-16 w-full px-6 py-6 md:px-10 overflow-y-scroll'>
            <TemplateDetails />
          </div>
          <div className='hidden lg:block bg-[#FAFAFA] h-[100dvh]'>
            <div className='chosenTemplate shadow-lg w-[595px] mt-[-8rem] mb-[-10rem]'>
              {
                template.name === 'Istanbul' ? <Istanbul itemref={itemref}/> 
                :template.name === 'Porto' ? <Porto />
                :template.name === 'Lisbon' ? <Lisbon />
                :template.name === 'Madrid' ? <Madrid itemref={itemref}/>
                : <Istanbul itemref={itemref}/>
              }
            </div>
            <TemplateStyles itemRef={itemref}/>
          </div>
        </div>
      </UserDetailsProvider>
    )
}
