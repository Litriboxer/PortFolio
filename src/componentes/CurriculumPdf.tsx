import { useState } from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Viewer } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Curriculum from '../pdf/Curriculum.pdf';

export const CurriculumPdf = () =>  {
    const [defaultCurriculum]=useState(Curriculum);
 
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    
      return (
        <div>
         
         {/* show pdf conditionally (if we have one)  */}
        {defaultCurriculum&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={Curriculum}
          plugins={[defaultLayoutPluginInstance]}/>
            
            </Worker></>}

         

        </div>
  
      );
    }
  
  
  export default CurriculumPdf;