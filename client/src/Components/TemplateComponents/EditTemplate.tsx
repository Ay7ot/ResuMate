import { useLocation } from "react-router-dom"
import Istanbul from "./TemplateItems/Istanbul"
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

  return (
    <div className='flex lg:w-screen h-[100dvh] relative overflow-x-hidden'>
      <div className='relative pt-16 w-full px-6 py-6 md:px-10 overflow-y-scroll'>
        <TemplateDetails />
        <div className='right-10 fixed bottom-3 lg:hidden flex items-center'>
          <PreviewButton template={template.name}/>
        </div>
      </div>
      <div className='hidden lg:block bg-[#FAFAFA] h-[100dvh]'>
        <div className='chosenTemplate shadow-lg w-[595px] mt-[-8rem] mb-[-10rem]'>
          {
            template.name === 'Istanbul' ? <Istanbul /> 
            :template.name === 'Porto' ? <Porto />
            :template.name === 'Lisbon' ? <Lisbon />
            :template.name === 'Madrid' ? <Madrid />
            :template.name === 'Kyiv' ? <Kyiv />
            :template.name === 'Milan' ? <Milan />
            :template.name === 'Cardiff' ? <Cardiff />
            :template.name === 'Berlin' ? <Berlin />
            : <Istanbul />
          }
        </div>
        <TemplateStyles template={template.name}/>
      </div>
    </div>
  )
}
