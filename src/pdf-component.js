// import React, { useState, useEffect } from 'react';
// import * as pdfjsLib from 'pdfjs-dist/build/pdf';
// import 'pdfjs-dist/build/pdf.worker.entry';

// pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

// const PDFViewer = ({ pdfPath }) => {
//   const [pdf, setPdf] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [numPages, setNumPages] = useState(null);

//   useEffect(() => {
//     const loadPdf = async () => {
//       const loadingTask = pdfjsLib.getDocument(pdfPath);
//       const pdfDocument = await loadingTask.promise;
//       setPdf(pdfDocument);
//       setNumPages(pdfDocument.numPages);
//     };

//     loadPdf();
//   }, [pdfPath]);

//   const renderPage = async (pageNum) => {
//     if (pdf) {
//       const page = await pdf.getPage(pageNum);
//       const scale = 1.5;
//       const viewport = page.getViewport({ scale });

//       const canvas = document.getElementById('pdf-render');
//       const context = canvas.getContext('2d');
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;

//       const renderContext = {
//         canvasContext: context,
//         viewport: viewport
//       };

//       page.render(renderContext);
//     }
//   };

//   useEffect(() => {
//     renderPage(pageNumber);
//   }, [pageNumber, pdf]);

//   const nextPage = () => {
//     if (pageNumber < numPages) {
//       setPageNumber(pageNumber + 1);
//     }
//   };

//   const prevPage = () => {
//     if (pageNumber > 1) {
//       setPageNumber(pageNumber - 1);
//     }
//   };

//   return (
//     <div className="pdf-viewer">
//       <canvas id="pdf-render" className="mx-auto mb-4" />
//       <div className="flex justify-center items-center space-x-4">
//         <button 
//           onClick={prevPage} 
//           disabled={pageNumber <= 1}
//           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span>Page {pageNumber} of {numPages}</span>
//         <button 
//           onClick={nextPage} 
//           disabled={pageNumber >= numPages}
//           className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PDFViewer;