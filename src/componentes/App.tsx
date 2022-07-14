import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../css/App.css';
import Cabecera from './Cabecera';
import Documentos from './Documentos';
import ExperienciasLaborales from './ExperienciasLaborales';
import Footer from './Footer';
import FormacionAcademica from './FormacionAcademica';
import MenuNav from './MenuNav';
import OtrosDatosInteres from './OtrosDatosInteres';
import Presentacion from './Presentacion';
import Referencias from './Referencias';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Cabecera />
        <MenuNav/>
        <div className="App-container">
          <BrowserRouter>
            <Routes>
              <Route path="/presentacion" element={<Presentacion />} />
              <Route path="/formacion" element={<FormacionAcademica />} />
              <Route path="/experienciasLaborales" element={<ExperienciasLaborales />} />
              <Route path="/referencias" element={<Referencias />} />
              <Route path="/otrosDatos" element={<OtrosDatosInteres />} />
              <Route path="/documentos" element={<Documentos />} />
              <Route path="#Contacto" />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
