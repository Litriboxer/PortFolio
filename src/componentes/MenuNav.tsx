import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
class MenuNav extends React.Component {



    render(): React.ReactNode {
        return (

            <div className="bg-gradient row container-xxl-1">
                <div className="my-5">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="p-4 d-flex justify-content-center h4 navitems">
                            <Nav.Link href="./Presentacion" className="text-secondary mx-5 navItems">Presentación</Nav.Link>
                            <Nav.Link href="./Formacion" className="text-secondary mx-5 navItems">Formación academica</Nav.Link>
                            <Nav.Link href="./ExperienciasLaborales" className="text-secondary mx-5 navItems">Experiencias laborales</Nav.Link>
                            <Nav.Link href="./Referencias" className="text-secondary mx-5 navItems">Referencias</Nav.Link>
                            <Nav.Link href="./OtrosDatos" className="text-secondary mx-5 navItems">Otros datos de interés</Nav.Link>
                            <Nav.Link href="./Documentos" className="text-secondary mx-5 navItems">Documentos</Nav.Link>
                            <Nav.Link href="./Contacto" className="text-secondary mx-5 navItems">Contacto</Nav.Link>
                        </div>
                    </div>
                    <nav className="navbar">
                        <div className="container-fluid justify-content-center">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default MenuNav;