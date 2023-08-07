import ImagenGaleria from "./ImagenGaleria";
import PropTypes from "prop-types";

 



export default function GaleriaImagen({imagenes}) {

    //lo que va a recibir en imagenA, imagenB, etc, es una url de la imagen propia al producto subida por el administrados.

  return (
    <>
        <div className="container-fluid pt-5 pb-5 bg-s white">
            {/* contenedor de las 5 imagenes */}
            <div className="row">
                {/* contenedor de la imagen principal */}
                <div className="col-12 col-lg-6 d-flex align-items-center">
                        <ImagenGaleria
                            url= {imagenes[0]}
                            alt= "imagen Principal"
                        />
                        
                </div>
                {/* Contenedor de las 4 imagenes restantes, con todas las clases col-lg, se logra que al pasar despues de los 992 px cambie el comportamiento de la estructura del contenedor de imagenes  */}
                <div className="col-12 col-lg-6 img-fluid">
                    <div className="col-12 col-lg-6">
                    <ImagenGaleria
                            url= {imagenes[1]}
                            alt= "img vehiculo retroDrive"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                    <ImagenGaleria
                            url= {imagenes[2]}
                            alt= "img vehiculo retroDrive"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                    <ImagenGaleria
                            url= {imagenes[3]}
                            alt= "img vehiculo retroDrive"
                        />
                    </div>
                    <div className="col-12 col-lg-6">
                    <ImagenGaleria
                            url= {imagenes[4]}
                            alt= "img vehiculo retroDrive"
                        />
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}


GaleriaImagen.propTypes = {
    imagenes: PropTypes.array.isRequired,
   
  };

