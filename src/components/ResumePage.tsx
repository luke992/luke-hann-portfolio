const ResumePage = () => {
  return (
    <div className="pt-4 flex flex-col w-full items-center justify-center">
      <div className="p-4 h-50 bg-gray-800 text-white overflow-y-scroll">
        <iframe src="https://drive.google.com/file/d/1SZHbo5oXxl94zJrXRC-XW71aCpHa_hUr/preview" width="640" height="480"></iframe>
      </div>
    </div>
  )
}
// 
      // <Document>
      //   <Page size="A4" style={styles.page} pageNumber={1}>
      //   </Page>
      // </Document>      
// 
        // <object data={resume} type="application/pdf" width="100%" height="500px">
        //     <p>Your browser does not support PDFs. You can <a href="document.pdf" target="_blank" rel="noopener noreferrer">download the PDF</a> instead.</p>
        // </object>

export default ResumePage
