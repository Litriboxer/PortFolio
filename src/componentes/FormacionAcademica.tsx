import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormacionAcademica extends React.Component {




  render(): React.ReactNode {
    return (

      <div className="bg-imagen bg-gradient row container-xxl-1">

        <h1 className="text-secondary display-4 text-left pt-5 pb-3 ps-5">Formaci&oacute;n Acad&eacute;mica</h1>
        <p className="mb-0">
          <section className="fst-italic presentacionTexto text-left p-5">

          </section>
        </p>

        <div className="container-xxl-1 row justify-content-center mx-5">
          <div className='col-5 me-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">Boot Camp Desarrollador Java Full Stack</h4>
            <p className="h3 bold mt-3">Duraci&oacute;n: </p> <p className="h5">950 Horas</p>
            <p className="h3 bold mt-3">Descripci&oacute;n de los estudios: </p>
            <p className="h5">
              Boot Camp impartido por <a href='https://www.fundaciononce.es/es'>Fundaci&oacute;n ONCE</a> y <a href='https://www.arelance.com/home'>Arelance </a>
              dirigido a la incorporaci&oacute;n laboral como desarrollador Full Stack.</p>
            <p className="h5">
              La parte dedicada a Front end estuvo centrada en el uso de <b>HTML5, CSS3, Bootstrap y React</b>. Usando para ello <b>Visual Studio Code</b>.
            </p>
            <p className="h5">
              La parte dedicada a Back End estuvo centrada en el uso de <b>Java, Spring Core, Spring Boot, Spring Security, Spring MVC, servicios Rest, Maven, Git, MySQL</b>.
              Tambi&eacute;n se utiliz&oacute; durante todo el curso metodolog&iacute;as de integraci&oacute;n continua de <b>arquitectura Devops</b>  como <b>Jetkins y Sonar como herramienta de control</b>
              de calidad y gu&iacute;a de <b>Clean Code</b>
            </p>
          </div>
          <div className='col-5 ms-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">Curso de Conserje de Fincas Urbanas</h4>
            <p className="h3 bold mt-3">Duraci&oacute;n: </p> <p className="h5">52 Horas</p>
            <p className="h3 bold mt-3">Descripci&oacute;n de los estudios: </p>
            <p className="h5">
              Este curso fue impartido por <a href='https://www.caritasmadrid.org/'>C&aacute;ritas Madrid</a>.
            </p>
            <p className="h5">
              Las materias del curso se basaron en <b>derechos y deberes del puesto</b>, <b>seguridad y prevenci&oacute;n de riesgos laborales</b>
              , <b>mantenimiento de edificios</b>, y <b>habilidades sociales y laborales (comunicaci&oacute;n y asertividad, el proceso de selecci&oacute;n en el mercado laboral)</b>
            </p>
          </div>

          <div className="w-100"></div>


          <div className='col-5 me-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">F.P</h4>
            <p className="h3 bold mt-3">Finalizaci&oacute;n: </p> <p className="h5">1999</p>
            <p className="h3 bold mt-3">Descripci&oacute;n de los estudios: </p>
            <p className="h5">
              Estudios de Formaci&oacute;n Profesional <b>F.P Rama Administrativa Grado 1</b>
            </p>
            <p className="h5">
              Cursados en <a href='https://retamar.com/'> Instituto Retamar</a>
            </p>
          </div>
          <div className='col-5 ms-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">E.G.B</h4>
            <p className="h3 bold mt-3">Finalizaci&oacute;n: </p> <p className="h5">1997</p>
            <p className="h3 bold mt-3">Descripci&oacute;n del puesto: </p>
            <p className="h5">
              Estudios correspondientes a Educaci&oacute;n General Obligatoria E.G.B
            </p>
            <p className="h5">
              Cursados en el colegio <a href='https://www.escolapiosaluche.com/'>Escuelas P&iacute;as de Aluche</a>
            </p>
          </div>

        </div>

      </div>
    );
  }
}

export default FormacionAcademica;