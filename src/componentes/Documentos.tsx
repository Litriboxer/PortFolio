import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import ImagenBotonPdf from "../multimedia/pdf.png";
import ImagenBotonVideo from "../multimedia/video.png";
import DiplomaPdf from './DiplomaPdf';
import CurriculumPdf from './CurriculumPdf';
import ModalDocumentos from './ModalDocumentos';




class Documentos extends React.Component {
  /* show: boolean;

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
  }; */

  cargaInfodeModalCurriculum = () => {
    ModalDocumentos.imagen = ImagenBotonPdf;
    ModalDocumentos.body = CurriculumPdf;
    ModalDocumentos.titulo.innerHTML += "Curriculum titulo por prop";
  }

  cargaInfodeModalVideoCurriculum = () => {
    ModalDocumentos.imagen = ImagenBotonVideo;
    ModalDocumentos.body.innerHTML += `<iframe className='ms-5'
    width="560" height="315" src="https://www.youtube-nocookie.com/embed/lwZ2yGDT7vo" title="YouTube video player"
    frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>`;
    ModalDocumentos.titulo += "Curriculum titulo por prop";
  }

  cargaInfodeModaldIPLOMA = () => {
    ModalDocumentos.imagen = ImagenBotonPdf;
    ModalDocumentos.body = DiplomaPdf;
    ModalDocumentos.titulo.innerHTML += "Diploma titulo por prop";
  }



  render(): React.ReactNode {
    return (
      <div className="bg-gradient row container-xxl-1">

        <div className="row container-xxl-1 align-items-center justify-content-center">

          <div className="col-5 ms-5">
            <h3 className="h1 text-secondary">Curr&iacute;culum Pdf</h3>
          </div>
          <div id="curriculum" className="col-2">

            <ModalDocumentos/>



            {/* <Button
              onClick={this.handleShow}
              variant="primary"
              id="botonModalCurr&iacute;culum"
            >
              <img src={ImagenBotonPdf}
                alt="boton abrir pdf" width={70} height={70} />
            </Button>

            <Modal id="ModalCurr&iacute;culum" size="lg" show={this.show} onHide={this.handleClose} animation={true}>
              <Modal.Header closeButton className='bg-gradient'>
                <Modal.Title><h3 className="h1 ms-5">Curr&iacute;culum PDF</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body className='bg-gradient'>
                <CurriculumPdf />
              </Modal.Body>
            </Modal> */}
          </div>
        </div>

        <div className="row mt-5 container-xxl-1 align-items-center justify-content-center">
          <div className="col-5 ms-5">
            <h3 className="h1 text-secondary">Video Curr&iacute;culum</h3>
          </div>
          <div id="videoCurriculum" className="col-2">


            <ModalDocumentos />



            {/* <Button
              onClick={this.handleShow}
              variant="primary"
              id="botonModalVideoCurr&iacute;culum"
            >
              <img src={ImagenBotonVideo}
                alt="boton abrir video" width={70} height={70} />
            </Button>

            <Modal id="ModalVideoCurr&iacute;culum" size="lg" show={this.show} onHide={this.handleClose} animation={true}>
              <Modal.Header closeButton className='bg-gradient'>
                <Modal.Title><h3 className="h1 ms-5">Video Curr&iacute;culum</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body className='bg-gradient'>
                <iframe className='ms-5'
                  width="560" height="315" src="https://www.youtube-nocookie.com/embed/lwZ2yGDT7vo" title="YouTube video player"
                  frameBorder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </Modal.Body>
            </Modal> */}
          </div>
        </div>


        <div className="row mt-5 container-xxl-1 align-items-center justify-content-center">

          <div className="col-5 ms-5">
            <h3 className="h1 text-secondary">Diplomas Curso Full Stack Pdf</h3>
          </div>
          <div id="diploma" className="col-2">


            <ModalDocumentos />



            {/* <Button
              onClick={this.handleShow}
              variant="primary"
              id="botonModalDiplomas"
            >
              <img src={ImagenBotonPdf}
                alt="boton abrir pdf" width={70} height={70} />
            </Button>

            <Modal id="ModalDiplomas" size="lg" show={this.show} onHide={this.handleClose} animation={true}>
              <Modal.Header closeButton className='bg-gradient'>
                <Modal.Title><h3 className="h1 ms-5">Diplomas Curso Full Stack Pdf</h3></Modal.Title>
              </Modal.Header>
              <Modal.Body className='bg-gradient'>
                <DiplomaPdf />
              </Modal.Body>
            </Modal> */}
          </div>
        </div>

      </div>

    );
  }
}

export default Documentos;


