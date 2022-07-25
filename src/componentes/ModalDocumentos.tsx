import React, { createRef } from "react";
import { Button, Modal } from "react-bootstrap";






class ModalDocumentos extends React.Component {
    imagen: any;
    body:any;
    titulo: any;
    show: boolean;

    constructor(props: any) {
        super(props);
        this.imagen = createRef();
        this.body = createRef();
        this.titulo = createRef();
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
                        <img src={this.imagen}
                        alt="boton abrir modal" width={70} height={70} /> 
                </Button>

                <Modal id="ModalCurr&iacute;culum" size="lg" show={this.show} onHide={this.handleClose} animation={true}>
                    <Modal.Header closeButton className='bg-gradient'>
                        <Modal.Title><h3 className="h1 ms-5"></h3></Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='bg-gradient'>
                        
                    </Modal.Body>
                </Modal>

            </div>
        );
    }
}

export default ModalDocumentos;