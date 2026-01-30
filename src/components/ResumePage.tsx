import resume from '../assets/Hann Resume.pdf'
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const ResumePage = () => {
  return (
    <div className="pt-4 flex flex-col w-full items-center justify-center">
      <div className="p-4 h-50 bg-gray-800 text-white overflow-y-scroll" height={200}>
        <Document file={resume} >
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}
      // <object data={resume} type="application/pdf" width="100%" height="500px">
      //     <p>Your browser does not support PDFs. You can <a href="document.pdf" target="_blank" rel="noopener noreferrer">download the PDF</a> instead.</p>
      // </object>
// 
      // <Document>
      //   <Page size="A4" style={styles.page} pageNumber={1}>
      //   </Page>
      // </Document>      

export default ResumePage
