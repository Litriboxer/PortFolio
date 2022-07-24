import React from 'react';
import fotoMerche from "../multimedia/fotoMerche.jpg"
import fotoVanesa from "../multimedia/fotoVanesa.jpg"
import fotoAngel from "../multimedia/fotoAngel.jpg"



class Referencias extends React.Component {




  render(): React.ReactNode {
    return (

      <div>
        <div className="bg-gradient row container-xxl-1 justify-content-center">


          <div className="col-5 my-5 mx-5 card mb-3 ps-0 text-bg-dark shadowRef">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={fotoMerche} className="img-fluid rounded-start" alt="Mercedes Martín de Paz" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title h1">Mercedes Mart&iacute;n de Paz</h5>
                  <p className="card-text h5 mt-3">Cargo:</p>
                  <p className="card-text">Gesti&oacute;n de formaci&oacute;n del programa <a target="_blank" rel="noreferrer" href="https://portalentodigital.fundaciononce.es/"> POR TALENTO DIGITAL </a> en Inserta Innovaci&oacute;n/Fundaci&oacute;n ONCE</p>
                  <p className="mt-5 fst-italic">“Pedro ha formado parte de la familia Por Talento Digital siendo alumno destacado de la primera promoci&oacute;n de
                    Desarrollador/a Full stack Java por su alta capacidad de aprendizaje, su compromiso y su trabajo en equipo. Sin duda,
                    es un perfil que encaja a la perfecci&oacute;n en cualquier proyecto o empresa tecnol&oacute;gica que valore el talento entre sus filas.”</p>
                  <p className="card-text h5 mt-5">Contacto:</p>
                  <a target="_blank" rel="noreferrer" href="mailto:Mmartindepaz@gmail.com">
                    <p>Mmartindepaz@gmail.com</p>
                  </a>

                </div>
              </div>
            </div>
          </div>


          <div className="col-5 my-5 mx-5 card mb-3 ps-0 text-bg-dark shadowRef">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={fotoVanesa} className="img-fluid rounded-start" alt="fotografía Vanesa Montero Fernandez"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title h1">Vanesa Montero Fern&aacute;ndez</h5>
                  <p className="card-text h5 mt-3">Cargo:</p>
                  <p className="card-text">Analista programadora / Analista funcional en GFT IT Consulting</p>
                  <p className="mt-5 fst-italic">“Destaco muy positivamente la gran capacidad de aprendizaje de Pedro y el compromiso con este gran nuevo reto para &eacute;l. A d&iacute;a de hoy, y en muy poco tiempo,
                    ha sido capaz de familiarizarse y aprender muchas de las tecnolog&iacute;as punteras con m&aacute;s demanda en el sector TIC (Java, Javascript, Spring, react, etc). En mi opini&oacute;n est&aacute; perfectamente
                    capacitado para seguir desarrollando sus capacidades como full stack developer en cualquier empresa del sector y, seg&uacute;n mi experiencia, los conocimientos con los que cuenta son una base
                    perfecta para continuar su formaci&oacute;n ya dentro del marco laboral”.</p>
                  <p className="card-text h5 mt-5">Contacto:</p>
                  <a target="_blank" rel="noreferrer" href="mailto:Montero.vane@gmail.com">
                    <p>Montero.vane@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-5 my-5 mx-5 card mb-3 ps-0 text-bg-dark shadowRef">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={fotoAngel} className="img-fluid rounded-start" alt="fotografía Angel Luis Alvaro"></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title h1">&Aacute;ngel Luis &Aacute;lvaro</h5>
                  <p className="card-text h5 mt-3">Cargo:</p>
                  <p className="card-text">Formador, Coach y Locutor</p>
                  <p className="mt-5 fst-italic">“Pedro es una persona a quien se le puede confiar cualquier actividad o proyecto a nivel profesional,
                    un trabajador que sabe bien lo que es trabajar, una persona con una personalidad que le permite luchar y avanzar ante cualquier circunstancia
                    que pueda surgir, siempre abierto a tender una mano y trabajar en pro del equipo profesional en el que figure. Un profesional creativo, tenaz
                    y resolutivo que tiene mucho que aportar al mundo laboral.”.</p>
                  <p className="card-text h5 mt-5">Contacto:</p>
                  <a target="_blank" rel="noreferrer" href="mailto:angelluis.alvaro@gmail.com">
                    <p>angelluis.alvaro@gmail.com</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Referencias;