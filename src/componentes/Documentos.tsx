import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurriculumPdf from './CurriculumPdf';
import { Button, Modal } from 'react-bootstrap';
import ImagenBoton from "../multimedia/pdf.png";



class Documentos extends React.Component {
   show: boolean;

  constructor(props: any) {
    super(props);
    this.show = false;

  }

  handleClose = () => {
    this.show = false;
    this.setState({ show: false });
  };
  handleShow = () => {
    this.show = true;

    this.setState({ show: true });
  }; 


  render(): React.ReactNode {
    return (
      <div className="bg-gradient row container-xxl-1">
       
        <div className="col-2 ms-5">
        <h3 className="h1">Curriculum Pdf</h3>
        </div>
        <div className="col-2">
        <Button
          onClick={this.handleShow}
          variant="secondary"
          className="btn btn-outline-secondary ms-5"
          id="botonNuevo"
        >
          <img src={ImagenBoton}
            alt="boton abrir pdf" width={70} height={60} />
        </Button>

        <Modal  className="modalWidth" show={this.show} onHide={this.handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Curriculum PDF</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <CurriculumPdf />
          </Modal.Body>
          <Modal.Footer>
            <Button>
              descargar
            </Button>

          </Modal.Footer>
        </Modal> 
        </div>

        

      </div>

    );
  }
}

export default Documentos;


