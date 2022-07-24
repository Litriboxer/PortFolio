import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from 'react-bootstrap';
import ImagenBoton from "../multimedia/pdf.png";
import CurriculumPdf from './CurriculumPdf';


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
      <div>
        <h1 className="ms-5">Componente documentos</h1>

        <Button
          onClick={this.handleShow}
          variant="secondary"
          className="btn btn-outline-secondary ms-5"
          id="botonNuevo"
        >
          <img src={ImagenBoton}
            alt="boton abrir pdf" width={140} height={60} />
        </Button>

        <Modal show={this.show} onHide={this.handleClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Curriculum PDF</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CurriculumPdf />
          </Modal.Body>
          <Modal.Footer>
            <Button>
              descargar
            </Button>

          </Modal.Footer>
        </Modal>

      </div>

    );
  }
}

export default Documentos;


