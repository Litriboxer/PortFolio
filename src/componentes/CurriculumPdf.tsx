import React, { useState } from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
// Documento
import PdfFile from '../pdf/Curriculum.pdf';

class CurriculumPdf extends React.Component {
    defaultPdfFile=useState(PdfFile);
 
    defaultLayoutPluginInstance = defaultLayoutPlugin();

    render(): React.ReactNode {
      return (
        <div>
         
         {/* show pdf conditionally (if we have one)  */}
        {this.defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={PdfFile}
          plugins={[this.defaultLayoutPluginInstance]}/>
            
            </Worker></>}

         

        </div>
  
      );
    }
  }
  
  export default CurriculumPdf;