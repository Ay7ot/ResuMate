// import { useLocation } from "react-router-dom"
// import Istanbul from "./Istanbul"
import { useRef } from "react"
import html2pdf from "html2pdf.js"
// import Porto from "./Porto"
// import Lisbon from "./Lisbon"
import Madrid from "./Madrid"

export default function EditTemplate() {

    // const location = useLocation()
    // const template = location.state

    
    const itemref = useRef<HTMLDivElement | null>(null)

    async function generatePdf(){


        const toDownload = itemref.current
        console.log('...is downloading')
        if(toDownload){
    
          const opt = {
            margin:       0.1,
            filename:     'myfile.pdf',
            image:        { type: 'png', quality: 0.98 },
            // html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
    
          html2pdf().from(toDownload).set(opt).save('document.pdf')
    
        }
        console.log('has downloaded ')

    }
    
    return (
      <div className="p-3">
        <button onClick={generatePdf} className="mb-6 p-2 bg-blue-300 rounded-md">Download</button>
        {/* <Istanbul itemref={itemref}/> */}
        {/* <Porto /> */}
        {/* <Lisbon /> */}
        <Madrid itemref={itemref}/>
      </div>
    )
}
