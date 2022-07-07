import React from 'react';
import '../css/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Presentacion extends React.Component {




  render(): React.ReactNode {
    return (

      <div className="bg-gradient">

        <h1 className="text-secondary display-4 text-left pt-5 pb-3 ps-5">Un poco de mí</h1>
        <p className="mb-0">
          <section className="bg-imagen fst-italic presentacionTexto text-left p-5">
            Nací en madrid en 1983.

            Crecí en una familia ordinaria, en el barrio de Aluche junto a un hermano 3 años mayor que yo.
            De padre confeccionista y madre ama de casa siempre estuve rodeado de un gran ambiente familiar, el cual gestó grandes recuerdes.
          
            Cursé los estudios de E.G.B en el <a target="_blank" rel="noreferrer"  href="https://www.escolapiosaluche.com/">colegio Nuestra Señora de la Escuelas Pías de Aluche.</a>
            Aquí comencé a destacar mi faceta creativa y tecnológica, acercandome a cualquier cosa que se pudiera enchufar, coenctar, teclear y sobre todo desmontar.
            Si bien no recibí ninguna formación orientada a esta afición, era junto a cualquier tipo de deporte la que llenaba mi tiempo y mi cabeza.
            Rápido esta afición deribó en videojuegos y no sólo en jugar con ellos sino en preguntarme como se hacían y como podía ser posible conseguir aquello de la nada.

            Estas curiosidades se vieron frenadas cuando empece a cursar F.P en el <a target="_blank" rel="noreferrer" href="https://retamar.com/">instituto Retamar</a>, ya que debido a la edad y los estudios todo cambió un poco, hasta cumplir 
            los 16 años y entrar en el mercado laboral.
            La mayoría de mis empleos fueron en comercios hasta que desfortunadamente tuve que pasr por una operación, la cual derivo en mi minusvalía.
            Durante el tiempo de recuperación los viejos fantasmas tecnológicos asomaron de nuevo. Esta vez empecé a conocer algo sistemas y un mínimo de programacion mediante 
            raspberry y proyectos que la gente hacia con ella. Me parecía un mundo que no no tenía mas barrera que las que pusiera tu imaginación.

            Tras pasar por algunos empleos más, finalmente tuve la oportunidad de formar parte de un Bootcamp
             impartido por <a target="_blank" rel="noreferrer" href="https://www.fundaciononce.es/es">Fundación ONCE</a>, <a target="_blank" rel="noreferrer" href="https://portalentodigital.fundaciononce.es/">XTalento Digital</a>
              y <a target="_blank" rel="noreferrer" href="https://www.arelance.com/home">Arelance</a> de Desarrollador Java Full Stack, el
            cual nos lleva hasta el día de hoy en el que espero que esta sección se siga escribiendo sin variar este camino jamás y alimentando estos conocimientos cada vez mas.
          </section>
        </p>
      </div>
    );
  }
}

export default Presentacion;