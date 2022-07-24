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
            A continuaci&oacute;n pueden ver mi actividad laboral.</p>
          <p className="h4 text-left px-5">Como se puede comprobar, dicha actividad laboral no corresponde con la rama del desarrollo web. Es por esto que en 2021 hice un cambio de rumbo total y curs&eacute; los estudios referidos en <a href="./Formacion">Formaci&oacute;n Acad&eacute;mica</a>
            , siendo esta la ruta laboral que deseo seguir. Es un mundo que me apasiona y del que siempre he querido formar parte, as&iacute; que espero poder hacerlo realidad en su empresa.
          </p>
        </p>
        <div className="container-xxl-1 row justify-content-center mx-5 my-5">
          <div className='col-6 sm-6 py-3'>
            <h4 className="h2 bold mb-5">Promoparc Subterr&aacute;neo Servicios</h4>
            <p className="h3">Desde: </p> <p className="h4">23/06/2014 </p> <p className="h3">Hasta: </p> <p className="h4">15/04/2021 </p>
            <p className="h3">Descripci&oacute;n del puesto: </p>
            <p className="h4">
              Durante el tiempo indicado estuve con contratos bajo el nombre de diferentes empresas siempre referidas a la misma.
              Desempe&ntilde;ando la labor de encargado de parking. Atendiendo a tareas de atenci&oacute;n, captaci&oacute;n y fidelizaci&oacute;n de clientes, control de ingresos, mantenimiento de equipos, formaci&oacute;n de nuevos trabajadores
              y todo tipo de servicio que los parking de Madrid necesitaran
            </p>
          </div>
          <div className='col-6 sm-6 py-3'>
            <h4 className=" h2 bold mb-5">BLANCO BUREO ADMINISTRACI&Oacute;N 21,S.A.</h4>
            <p className="h4 ">Desde: </p> <p className="h4">03/02/2005 </p> <p className="h3">Hasta: </p> <p className="h4">23/06/2009</p>
            <p className="h3 ">Descripci&oacute;n del puesto: </p>
            <p className="h4">
              Mozo de carpinter&iacute;a y montaje de decorados para RTVE.
            </p>
          </div>

          <div className="w-100"></div>

          <div className='col-6 sm-6 py-3 mt-5'>
            <h4 className=" h2 bold mb-5">DIANA PROMOCI&Oacute;N, S.A.</h4>
            <p className="h3">Desde: </p> <p className="h4">14/06/2003</p> <p className="h3">Hasta: </p> <p className="h4">06/06/2004</p>
            <p className="h3">Descripci&oacute;n del puesto: </p>
            <p className="h4">
              Mozo de almac&eacute;n, cajero-reponedor en perfumer&iacute;a.
            </p>
          </div>
          <div className='col-6 sm-6 py-3 mt-5'>
            <h4 className=" h2 bold mb-5">ROMERO BODAS ALBERTO</h4>
            <p className="h3">Desde: </p> <p className="h4"> 08/10/2002</p> <p className="h3">Hasta: </p> <p className="h4">14/03/2003</p>
            <p className="h3">Descripci&oacute;n del puesto: </p>
            <p className="h4">
              Peón frigorista. Instalaci&oacute;n de aire acondicionado en obra nueva.
            </p>
          </div>
        </div>
        <p className="mb-0">
          <section className="fst-italic presentacionTexto text-left p-5">
            Aqu&iacute; se muestran los empleos m&aacute;s significativos. Obviando primeros empleos y otros de corta duraci&oacute;n. As&iacute; como el tiempo comprendido entre 2009 y 2014
            el cual estuve laboralmente inactivo debido a la operaci&oacute;n de la cual deriv&oacute; mi minusval&iacute;a y su correspondiente recuperaci&oacute;n y rehabilitaci&oacute;n hasta estar
            completamente recuperado para reanudar la actividad laboral
          </section>
        </p>
      </div>
    );
  }
}

export default ExperienciasLaborales;