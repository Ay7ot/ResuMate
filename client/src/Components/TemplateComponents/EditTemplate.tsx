import { useLocation } from "react-router-dom"
import Istanbul from "./TemplateItems/Istanbul"
import { useRef, useEffect } from "react"
import Porto from "./TemplateItems/Porto"
import Lisbon from "./TemplateItems/Lisbon"
import Madrid from "./TemplateItems/Madrid"
import TemplateDetails from "./TemplateDetails"
import TemplateStyles from "./TemplateStyles"
import Kyiv from "./TemplateItems/Kyiv"
import Milan from "./TemplateItems/Milan"
import Cardiff from "./TemplateItems/Cardiff"
import Berlin from "./TemplateItems/Berlin"
import PreviewButton from "./PreviewButton"

export default function EditTemplate() {

  const location = useLocation()
  const template = location.state

  const itemref = useRef<HTMLDivElement | null>(null)

  useEffect(()=>{
    window.scrollTo(0,0)  
  },[])

  return (
    <div className='flex lg:w-screen h-[100dvh] relative'>
      <div className='relative pt-16 w-full px-6 py-6 md:px-10 overflow-y-scroll'>
        <TemplateDetails />
        <div className='right-10 fixed bottom-3 lg:hidden flex items-center'>
          <PreviewButton />
        </div>
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
            :template.name === 'Berlin' ? <Berlin itemref={itemref}/>
            : <Istanbul itemref={itemref}/>
          }
        </div>
        <TemplateStyles itemRef={itemref} template={template.name}/>
      </div>
    </div>
  )
}
