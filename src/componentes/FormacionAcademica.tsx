import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class FormacionAcademica extends React.Component {




    render(): React.ReactNode {
      return (
  
        <div className="bg-imagen bg-gradient row container-xxl-1">

<h1 className="text-secondary display-4 text-left pt-5 pb-3 ps-5">Formación Académica</h1>
<p className="mb-0">
          <section className="fst-italic presentacionTexto text-left p-5">
            
          </section>
        </p>

        <div className="container-xxl-1 row justify-content-center mx-5">
          <div className='col-5 me-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">Boot Camp Desarrollador Java Full Stack</h4>
            <p className="h3 bold mt-3">Duración: </p> <p className="h5">950 Horas</p>
            <p className="h3 bold mt-3">Descripción de los estudios: </p>
            <p className="h5">
              Boot Camp impartido por <a href='https://www.fundaciononce.es/es'>Fundación ONCE</a> y <a href='https://www.arelance.com/home'>Arelance </a>
               dirigido a la incorporación laboral como desarrollador Full Stack.</p>
               <p className="h5">
              La parte dedicada a Front end estuvo centrada en el uso de <b>HTML5, CSS3, Bootstrap y React</b>. Usando para ello <b>Visual Studio Code</b>.
              </p>
              <p className="h5">
              La parte dedicada a Back End estuvo centrada en el uso de <b>Java, Spring Core, Spring Boot, Spring Security, Spring MVC, servicios Rest, Maven, Git, MySQL</b>.
              También se utilizó durante todo el curso metodologías de integración contínua de <b>arquitectura Devops</b>  como <b>Jetkins y Sonar como herramienta de control</b>
              de calidad y guía de <b>Clean Code</b>
            </p>
          </div>
          <div className='col-5 ms-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">Curso de Conserje de Fincas Urbanas</h4>
            <p className="h3 bold mt-3">Duración: </p> <p className="h5">52 Horas</p>
            <p className="h3 bold mt-3">Descripción de los estudios: </p>
            <p className="h5">
             Este curso fué impartido por <a href='https://www.caritasmadrid.org/'>Caritas Madrid</a>.
             </p>
             <p className="h5">
              Las materias del curso se basaron en <b>derechos y deberes del puesto</b>, <b>seguridad y prevención de riesgos laborales</b>
              , <b>mantenimiento de edificios</b>, y <b>habilidades sociales y laborales (comunicación y asertividad, el proceso de selección en el mercado laboral)</b>
            </p>
          </div>

          <div className="w-100"></div>


          <div className='col-5 me-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">F.P</h4>
            <p className="h3 bold mt-3">Finalización: </p> <p className="h5">1999</p>
            <p className="h3 bold mt-3">Descripción de los estudios: </p>
            <p className="h5">
              Estudios de Formación Profresional <b>F.P Rama Administrativa Grado 1</b>
            </p>
            <p className="h5">
              Cursados en <a href='https://retamar.com/'> Instituto Retamar</a>
            </p>
          </div>
          <div className='col-5 ms-5 mb-5 sm-5 py-3'>
            <h4 className="h2 bold">E.G.B</h4>
            <p className="h3 bold mt-3">Finalización: </p> <p className="h5">1997</p> 
            <p className="h3 bold mt-3">Descripción del puesto: </p>
            <p className="h5">
              Estudios correspondientes a Educaión General Obligatoria E.G.B
            </p>
            <p className="h5">
              Cursados en el colégio <a href='https://www.escolapiosaluche.com/'>Escuelas Pías de Aluche</a>
            </p>
          </div>




          </div>



        </div>
      );
}
}

export default FormacionAcademica;