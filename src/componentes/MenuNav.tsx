import React from 'react';
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class MenuNav extends React.Component {


    render(): React.ReactNode {
        return (

            <div className="bg-gradient row container-xxl-1">
                <div className="my-5">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="p-4 d-flex justify-content-center h4 navitems">
                            <Nav.Link as={Link} to="./Presentacion" className="text-secondary mx-5 navItems">Presentaci&oacute;n</Nav.Link>
                            <Nav.Link as={Link} to="./Formacion" className="text-secondary mx-5 navItems">Formaci&oacute;n acad&eacute;mica</Nav.Link>
                            <Nav.Link as={Link} to="./ExperienciasLaborales" className="text-secondary mx-5 navItems">Experiencias laborales</Nav.Link>
                            <Nav.Link as={Link} to="./Referencias" className="text-secondary mx-5 navItems">Referencias</Nav.Link>
                            <Nav.Link as={Link} to="./OtrosDatos" className="text-secondary mx-5 navItems">Otros datos de inter&eacute;s</Nav.Link>
                            <Nav.Link as={Link} to="./Documentos" className="text-secondary mx-5 navItems">Documentos</Nav.Link>
                            <Nav.Link as={Link} to="./Contacto" className="text-secondary mx-5 navItems">Contacto</Nav.Link>
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