import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';





class Documentos extends React.Component {
    

render(): React.ReactNode {
    return (
        <div>
<h1>Componente documentos</h1>



<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalPDF">
  Launch demo modal
</button>


<div className="modal fade"  id="ModalPDF"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modalWidth" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Curriculum</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <object className="PDFdoc" width="100%" height="600px" type="application/pdf" data="https://www.antennahouse.com/XSLsample/pdf/sample-link_1.pdf" aria-label='Curriculum pdf'></object>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-info far fa-file-pdf ml-1 text-white">Descargar</button>
        <button type="button" className="btn btn-outline-info waves-effect" data-dismiss="modal">Cerrar <i className="fas fa-times ml-1"></i></button>
        
        
      </div>
    </div>
  </div>
</div>

        </div>
          
           );
     }
     }
     
     export default Documentos;


