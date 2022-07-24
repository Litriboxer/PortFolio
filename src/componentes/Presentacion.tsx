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
            Nac&iacute; en madrid en 1983.
          </p>

          <p>
            Crec&iacute; en una familia ordinaria, en el barrio de Aluche junto a un hermano 3 años mayor que yo.
            De padre confeccionista y madre ama de casa siempre estuve rodeado de un gran ambiente familiar, el cual gest&oacute; grandes recuerdos.
          </p>
          <p>
            Curs&eacute; los estudios de E.G.B en el <a target="_blank" rel="noreferrer" href="https://www.escolapiosaluche.com/">colegio Nuestra Se&ntilde;ora de la Escuelas P&iacute;as de Aluche. </a>
            Aqu&iacute; comenc&eacute; a destacar mi faceta creativa y tecnol&oacute;gica, acerc&aacute;ndome a cualquier cosa que se pudiera enchufar, conectar, teclear y sobre todo desmontar.
            Si bien no recib&iacute; ninguna formaci&oacute;n orientada a esta afici&oacute;n, era junto a cualquier tipo de deporte la que llenaba mi tiempo y mi cabeza.
            R&aacute;pido esta afici&oacute;n deriv&oacute; en videojuegos y no s&oacute;lo en jugar con ellos sino en preguntarme c&oacute;mo se hacían y c&oacute;mo pod&iacute;a ser posible conseguir aquello de la nada.
          </p>
          <p>
            Estas curiosidades se vieron frenadas cuando empec&eacute; a cursar F.P en el <a target="_blank" rel="noreferrer" href="https://retamar.com/">Instituto Retamar</a>, ya que debido a la edad y los estudios
            todo cambi&oacute; un poco, hasta cumplir los 16 a&ntilde;os y entrar en el mercado laboral.
          </p>
          <p>
            La mayor&iacute;a de mis empleos fueron en comercios hasta que desfortunadamente tuve que pasar por una operaci&oacute;n, la cual deriv&oacute; en mi minusval&iacute;a.
            Durante el tiempo de recuperaci&oacute;n los viejos fantasmas tecnol&oacute;gicos asomaron de nuevo. Esta vez empec&eacute; a conocer algo sistemas y un m&iacute;nimo de programaci&oacute;n mediante
            Raspberry y proyectos que la gente hac&iacute;a con ella. Me parec&iacute;a un mundo que no no ten&iacute;a m&aacute;s barreras que las que pusiera tu imaginaci&oacute;n.
          </p>
          <p>
            En este tiempo tuve la suerte de ser pap&aacute; de dos peque&ntilde;os, lo cual cambi&oacute; en gran modo vida y me hizo empezar a pensar cada vez m&aacute;s en serio la idea de dedicarme
            laboralmente a algo que me hiciera disfrutar de mi trabajo y que estuviera unido a una de mis pasiones.
          </p>
          <p>
            Tras pasar por algunos empleos m&aacute;s, finalmente tuve la oportunidad de formar parte de un Bootcamp
            impartido por <a target="_blank" rel="noreferrer" href="https://www.fundaciononce.es/es">Fundaci&oacute;n ONCE</a>, <a target="_blank" rel="noreferrer" href="https://portalentodigital.fundaciononce.es/">XTalento Digital</a>
            &nbsp; y <a target="_blank" rel="noreferrer" href="https://www.arelance.com/home">Arelance</a> de Desarrollador Java Full Stack, el
            cual nos lleva hasta el d&iacute;a de hoy en el que espero que esta secci&oacute;n se siga escribiendo sin variar este camino jam&aacute;s y alimentando estos conocimientos cada vez m&aacute;s.
          </p>
        </p>
      </div>
    );
  }
}

export default Presentacion;