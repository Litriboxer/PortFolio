import React from 'react';
import fotoPedro from "../multimedia/fotoPedro.png";
import '../css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Cabecera extends React.Component {

  render(): React.ReactNode {
    return (

      <div className="bg-gradient row container-xxl-1">
        <div className="my-5">
          <div className="container-fluid row px-5">
            <div className="container-fluid row justify-content-center">
              <div className=" col-md-6 md" >
                <h1 className="text-secondary  display-3 text-left pt-5 pb-3 ps-5">Pedro Cuenca Panadero </h1>
                <h2 className="fst-italic display-6 text-left ps-5">Desarrollador Full Stack</h2>
              </div>
              <div className="col-md-3 px-5  d-flex justify-content-center">
                <img src={fotoPedro} className="rounded-circle border border-4 border-secondary img-fluid float-center mt-4 me-3 mb-5"
                  alt="foto cara Pedro Cuenca Panadero" width={250} height={250} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cabecera;