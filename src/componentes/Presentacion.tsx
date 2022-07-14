import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentacion extends React.Component {

  render(): React.ReactNode {
    return (

      <div className="bg-imagen bg-gradient">

        <h1 className="text-secondary display-4 text-left pt-5 pb-3 ps-5">Un poco de mí</h1>
        <p className="mb-0 fst-italic presentacionTexto text-left p-5 h4">
          
            <p>
              Nací en madrid en 1983.
              </p>

            <p>
              Crecí en una familia ordinaria, en el barrio de Aluche junto a un hermano 3 años mayor que yo.
            De padre confeccionista y madre ama de casa siempre estuve rodeado de un gran ambiente familiar, el cual gestó grandes recuerdes.
            </p>
            <p>
            Cursé los estudios de E.G.B en el <a target="_blank" rel="noreferrer" href="https://www.escolapiosaluche.com/">colegio Nuestra Señora de la Escuelas Pías de Aluche. </a>
            Aquí comencé a destacar mi faceta creativa y tecnológica, acercandome a cualquier cosa que se pudiera enchufar, coenctar, teclear y sobre todo desmontar.
            Si bien no recibí ninguna formación orientada a esta afición, era junto a cualquier tipo de deporte la que llenaba mi tiempo y mi cabeza.
            Rápido esta afición deribó en videojuegos y no sólo en jugar con ellos sino en preguntarme como se hacían y como podía ser posible conseguir aquello de la nada.
            </p>
            <p>
            Estas curiosidades se vieron frenadas cuando empece a cursar F.P en el <a target="_blank" rel="noreferrer" href="https://retamar.com/">Instituto Retamar</a>, ya que debido a la edad y los estudios
             todo cambió un poco, hasta cumplir los 16 años y entrar en el mercado laboral.
             </p>
             <p>
            La mayoría de mis empleos fueron en comercios hasta que desfortunadamente tuve que pasar por una operación, la cual derivó en mi minusvalía.
            Durante el tiempo de recuperación los viejos fantasmas tecnológicos asomaron de nuevo. Esta vez empecé a conocer algo sistemas y un mínimo de programacion mediante
            raspberry y proyectos que la gente hacia con ella. Me parecía un mundo que no no tenía mas barrera que las que pusiera tu imaginación.
            </p>
            <p>
            En este tiempo tuve la suerte de se papá de dos pequeños, lo cual cambio en gran modo vida y me hizo empezar a pensar cada vez más en serio la idea de dedicarme
            laboralmente a algo que me hiciera disfrutar de mis trabajo y que ello estuviera unido a una de mis pasiones.
            </p>
            <p>
            Tras pasar por algunos empleos más, finalmente tuve la oportunidad de formar parte de un Bootcamp
            impartido por <a target="_blank" rel="noreferrer" href="https://www.fundaciononce.es/es">Fundación ONCE</a>, <a target="_blank" rel="noreferrer" href="https://portalentodigital.fundaciononce.es/">XTalento Digital</a>
            y <a target="_blank" rel="noreferrer" href="https://www.arelance.com/home">Arelance</a> de Desarrollador Java Full Stack, el
            cual nos lleva hasta el día de hoy en el que espero que esta sección se siga escribiendo sin variar este camino jamás y alimentando estos conocimientos cada vez mas.
            </p>
        </p>
      </div>
    );
  }
}

export default Presentacion;