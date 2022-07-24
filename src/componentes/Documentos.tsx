import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurriculumPdf from './CurriculumPdf';
import { Button, Modal } from 'react-bootstrap';
import ImagenBotonPdf from "../multimedia/pdf.png";
import ImagenBotonVideo from "../multimedia/video.png";




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

        <div className="row container-xxl-1 align-items-center justify-content-center">

        <div className="col-5 ms-5">
          <h3 className="h1 text-secondary">Curr&iacute;culum Pdf</h3>
        </div>
        <div className="col-2">
          <Button
            onClick={this.handleShow}
            variant="primary"
            className=""
            id="botonPdf"
          >
            <img src={ImagenBotonPdf}
              alt="boton abrir pdf" width={70} height={70} />
          </Button>

          <Modal size="lg" show={this.show} onHide={this.handleClose} animation={true}>
            <Modal.Header closeButton className='bg-gradient'>
              <Modal.Title><h3 className="h1 ms-5">Curr&iacute;culum PDF</h3></Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-gradient'>
              <CurriculumPdf />
            </Modal.Body>
          </Modal>
        </div>
        </div>

        <div className="row mt-5 container-xxl-1 align-items-center justify-content-center">
        <div className="col-5 ms-5">
          <h3 className="h1 text-secondary">Video Curr&iacute;culum</h3>
        </div>
        <div className="col-2">
         <Button> <img src={ImagenBotonVideo}
              alt="boton abrir video" width={70} height={70} /></Button>
        </div>

        </div>


      </div>

    );
  }
}

export default Documentos;


