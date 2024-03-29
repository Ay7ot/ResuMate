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
import { useEffect } from "react"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"
// import SaveModal from "./SaveModal"

export default function EditTemplate() {

  const location = useLocation()
  const template = location.state
  const { darkTheme } = useGeneralAppContext()

  console.log(template)

  useEffect(() => {
    window.screenTop
  }, [])

  return (
    <div className={`${darkTheme ? 'bg-[#121212]' : 'bg-[#ffffff]'} flex items-center justify-center lg:w-screen h-[100dvh] overflow-y-hidden relative overflow-x-hidden`}>
      <div className='relative pt-16 w-full px-6 py-6 md:px-10 h-screen overflow-y-scroll'>
        <TemplateDetails />
        <div className='right-10 fixed bottom-3 lg:hidden flex items-center'>
          <PreviewButton template={template.name || template.templateInfo.template} />
        </div>
      </div>
      <div className={`hidden lg:block ${darkTheme ? 'bg-[#1a1a1a]' : 'bg-[#fafafa]'} h-[100dvh]`}>
        <div className='chosenTemplate shadow-lg w-[595px] mt-[-8rem] mb-[-10rem]'>
          {
            template.name === 'Istanbul' || (template.templateInfo && template.templateInfo.template === 'Istanbul') ? <Istanbul />
              : template.name === 'Porto' || (template.templateInfo && template.templateInfo.template === 'Porto') ? <Porto />
                : template.name === 'Lisbon' || (template.templateInfo && template.templateInfo.template === 'Lisbon') ? <Lisbon />
                  : template.name === 'Madrid' || (template.templateInfo && template.templateInfo.template === 'Madrid') ? <Madrid />
                    : template.name === 'Kyiv' || (template.templateInfo && template.templateInfo.template === 'Kyiv') ? <Kyiv />
                      : template.name === 'Milan' || (template.templateInfo && template.templateInfo.template === 'Milan') ? <Milan />
                        : template.name === 'Cardiff' || (template.templateInfo && template.templateInfo.template === 'Cardiff') ? <Cardiff />
                          : template.name === 'Berlin' || (template.templateInfo && template.templateInfo.template === 'Berlin') ? <Berlin />
                            : <Istanbul />
          }
        </div>
        <TemplateStyles template={template.name || template.templateInfo.template} />
      </div>
      {/* <div className="absolute">
        <SaveModal />
      </div> */}
    </div>
  )
}
