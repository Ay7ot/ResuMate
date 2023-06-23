import html2pdf from 'html2pdf.js'

export async function generatePdf(ref: React.MutableRefObject<HTMLDivElement | null>){


    const toDownload = ref.current
    
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

}