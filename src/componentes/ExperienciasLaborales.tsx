import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
class ExperienciasLaborales extends React.Component {




  render(): React.ReactNode {
    return (

      <div className="bg-imagen bg-gradient row container-xxl-1">
        <h1 className="text-secondary display-4 text-left pt-5 pb-3 ps-5">Experiencias Laborales</h1>
        <p className="mb-0">
          <p className="fst-italic presentacionTexto text-left h4 p-5">
            A continuación pueden ver mi actividad laboral.</p>
            <p className="h4 text-left px-5">Como se puede comprobar, dicha actividad laboral no corresponde con la rama del desarrollo web. Es por esto que en 2021 hice un cambio de rumbo total y curse los estudios referidos en <a href="./Formacion">Formación Académica</a>
            ,siendo esta la ruta laboral que deseo seguir. Es un mundo que me apasiona y del que siempre he querido formar parte, así que espero poder hacerlo realidad en su empresa.
          </p>
        </p>
        <div className="container-xxl-1 row justify-content-center mx-5 my-5">
          <div className='col-6 sm-6 py-3'>
            <h4 className="h2 bold mb-5">Promoparc Subterraneo Servicios</h4>
            <p className="h3">Desde: </p> <p className="h4">23/06/2014 </p> <p className="h3">Hasta: </p> <p className="h4">15/04/2021 </p>
            <p className="h3">Descripción del puesto: </p>
            <p className="h4">
              Durante el tiempo indicado estuve con contratos bajo el nombre de diferentes empreseas siempre referidas a la misma.
              Desempeñando la labor de encargado de parking. Atendiendo a tareas de atención, captación y fidelización de clientes, control de ingresos, mantenimiento de equipos, formación de nuevos trabajadores
              y todod tipo de servicio que los parking de madrid necesitaran
            </p>
          </div>
          <div className='col-6 sm-6 py-3'>
            <h4 className=" h2 bold mb-5">BLANCO BUREO ADMINISTRACION 21,S.A.</h4>
            <p className="h4 ">Desde: </p> <p className="h4">03/02/2005 </p> <p className="h3">Hasta: </p> <p className="h4">23/06/2009</p>
            <p className="h3 ">Descripción del puesto: </p>
            <p className="h4">
              Mozo de carpinteria y montaje de decorados para RTVE.
            </p>
          </div>

          <div className="w-100"></div>

          <div className='col-6 sm-6 py-3 mt-5'>
            <h4 className=" h2 bold mb-5">DIANA PROMOCION, S.A.</h4>
            <p className="h3">Desde: </p> <p className="h4">14/06/2003</p> <p className="h3">Hasta: </p> <p className="h4">06/06/2004</p>
            <p className="h3">Descripción del puesto: </p>
            <p className="h4">
              Mozo de almacén, cajero-reponedor en perfumería.
            </p>
          </div>
          <div className='col-6 sm-6 py-3 mt-5'>
            <h4 className=" h2 bold mb-5">ROMERO BODAS ALBERTO</h4>
            <p className="h3">Desde: </p> <p className="h4"> 08/10/2002</p> <p className="h3">Hasta: </p> <p className="h4">14/03/2003</p>
            <p className="h3">Descripción del puesto: </p>
            <p className="h4">
            Peón frigorista. Instalación de aire acondicionado en obra nueva.
            </p>
          </div>
        </div>
        <p className="mb-0">
          <section className="fst-italic presentacionTexto text-left p-5">
          Aqui se muestran los empleos más significativos. Obviando primeros empleos y otros de corta duración. Asi como el tiempo comprendido entre 2009 y 2014 
          el cual estuve laboralmente inactivo debido a la operación de la cual derivó mi minusvalia y su correspondiente recuperación y rehabilitación hasta estar 
          completamente recuperado para reanudar la actividad laboral
          </section>
        </p>
      </div>
    );
  }
}

export default ExperienciasLaborales;