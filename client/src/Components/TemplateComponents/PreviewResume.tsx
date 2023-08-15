import html2pdf from "html2pdf.js"
import { useEffect } from "react"
import { useGeneralAppContext } from "../../Functions/useGeneralAppContext"

export default function PreviewResume() {

    const { itemRef } = useGeneralAppContext()

    //   download dunction
    async function generatePdf(){
        const toDownload = itemRef.current
        console.log(toDownload)

        if(toDownload){
            // setLoading(true)
            const opt = {
                margin:       0,
                filename:     'myfile.pdf',
                image:        { type: 'png', quality: 1 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'in', format: [6.198, 8.77], orientation: 'portrait' }
            };

           
            // setLoading(false)
            try {
                const blob =  await html2pdf().from(toDownload).set(opt).outputPdf('blob', 'document.pdf')
                console.log(blob)
            } catch (error){
                console.error(error)
            }
        }
    }

    useEffect(()=>{
        generatePdf()
    })

    return (

        <div className="min-h-screen bg-blue-300">
        
        </div>
    )
}
