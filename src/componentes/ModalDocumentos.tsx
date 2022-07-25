import React, { createRef } from "react";
import { Button, Modal } from "react-bootstrap";
class ModalDocumentos extends React.Component {
    static imagen: any;
    static body:any;
    static titulo: any;
    static id: any;
    show: boolean;

    constructor(props: any) {
        super(props);
        ModalDocumentos.imagen = createRef();
        ModalDocumentos.body = createRef();
        ModalDocumentos.titulo = createRef();
        ModalDocumentos.id = createRef();
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
                <Button
                    onClick={this.handleShow}
                    variant="primary"
                    id="botonModalCurr&iacute;culum"
                >
                        <img ref={ModalDocumentos.imagen}
                        alt="boton abrir modal" width={70} height={70} /> 
                </Button>

                <Modal  ref={ModalDocumentos.id} size="lg" show={this.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header closeButton className='bg-gradient'>
                        <Modal.Title><h3 className="h1 ms-5" ref={ModalDocumentos.titulo}></h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-gradient'>
                        <div ref={ModalDocumentos.body}></div>
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default ModalDocumentos;