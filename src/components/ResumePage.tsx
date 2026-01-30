import resume from '../assets/Hann Resume.pdf'

const ResumePage = () => {
  return (
    <div className="pt-4 flex flex-col w-full items-center justify-center">
      <div className="p-4 h-50 bg-gray-800 text-white overflow-y-scroll">
        <object data={resume} type="application/pdf" width="100%" height="500px">
            <p>Your browser does not support PDFs. You can <a href="document.pdf" target="_blank" rel="noopener noreferrer">download the PDF</a> instead.</p>
        </object>
      </div>
    </div>
  )
}
// 
      // <Document>
      //   <Page size="A4" style={styles.page} pageNumber={1}>
      //   </Page>
      // </Document>      

export default ResumePage
