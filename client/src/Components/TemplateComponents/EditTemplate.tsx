import { useLocation } from "react-router-dom"
import Istanbul from "./Istanbul"
import { useRef, useEffect } from "react"
import Porto from "./Porto"
import Lisbon from "./Lisbon"
import Madrid from "./Madrid"
import TemplateDetails from "./TemplateDetails"
import TemplateStyles from "./TemplateStyles"
import Kyiv from "./Kyiv"
import Milan from "./Milan"
import Cardiff from "./Cardiff"

export default function EditTemplate() {

  const location = useLocation()
  const template = location.state

  const itemref = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    window.scrollTo(0,0)  
  },[])
    
  return (
    <div className='flex lg:w-screen h-[100dvh] relative'>
      <div className='pt-16 w-full px-6 py-6 md:px-10 overflow-y-scroll'>
        <TemplateDetails />
      </div>
      <div className='hidden lg:block bg-[#FAFAFA] h-[100dvh]'>
        <div className='chosenTemplate shadow-lg w-[595px] mt-[-8rem] mb-[-10rem]'>
          {
            template.name === 'Istanbul' ? <Istanbul itemref={itemref}/> 
            :template.name === 'Porto' ? <Porto itemref={itemref}/>
            :template.name === 'Lisbon' ? <Lisbon itemref={itemref}/>
            :template.name === 'Madrid' ? <Madrid itemref={itemref}/>
            :template.name === 'Kyiv' ? <Kyiv itemref={itemref}/>
            :template.name === 'Milan' ? <Milan itemref={itemref}/>
            :template.name === 'Cardiff' ? <Cardiff itemref={itemref}/>
            : <Istanbul itemref={itemref}/>
          }
        </div>
        <TemplateStyles itemRef={itemref} template={template.name}/>
      </div>
    </div>
  )
}
