import { useState } from "react";
import Title from "./Title";
import axios from "axios";
import Button from "./Button";

export default function RegistroProducto() {
  // Nuevo estado para el mensaje de error del servidor
  const [errorMessage, setErrorMessage] = useState("");
  
  const [marca, setMarca] = useState("");

  const [modelo, setModelo] = useState("");

  const [descripcion, setDescripcion] = useState("");

  // este useState es para manejar el div de formulario enviado con exito
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/vehiculo/crear", {
        marca: marca,
        modelo: modelo,
        descripcion: descripcion
      })
      .then((response) => {
        console.log(response.data); // Muestra la respuesta del servidor en la consola
        setIsSubmitted(true); // Establece la variable de estado a true cuando se envía el formulario
        setTimeout(() => {
          setIsSubmitted(false); // Cambia el estado a false después de 4.5 segundos
        }, 4500);
      })
      .catch((error) => {
        // Si la respuesta del servidor contiene un mensaje de error
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data);
          setTimeout(() => {
            setErrorMessage(""); // Establece el estado a vacío después de 5 segundos
          }, 5000);
        } else {
          // Otros errores, muestra un mensaje genérico
          setErrorMessage("Error al procesar la solicitud.");
        }
      });
  };

  //para eliminar los espacios en blanco
  const removeWhiteSpace = (value) => value.replace(/^\s+/g, "");

  return (
    <>
      <div className="container-fluid bg-s text-white pt-5 pb-5">
        <div className="row pt-5 pb-5">
          <Title title="REGISTRE UN VEHICULO" />
          <div className="col-12 ">
            <form onSubmit={handleSubmit} className="text-center">
              {/* Marca */}

              <div className="pb-2">
                <input
                  id="marca"
                  type="string"
                  placeholder="ingrese su marca"
                  value={marca}
                  onChange={(e) => setMarca(removeWhiteSpace(e.target.value))}
                  className="input-moderno"
                />
              </div>

              {/*Modelo */}

              <div className="pb-2">
                <input
                  id="modelo"
                  type="string"
                  placeholder="ingrese su Modelo"
                  value={modelo}
                  onChange={(e) =>
                    setModelo(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>

                   {/*Descripcion */}

                   <div className="pb-2">
                <input
                  id="descripcion"
                  type="string"
                  placeholder="ingrese la descripcion del vehiculo"
                  value={descripcion}
                  onChange={(e) =>
                    setDescripcion(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>
              <div className="mt-3">
              <Button
                            text="Registrar Vehiculo"
                            size="medium"
                            onClick= {handleSubmit}
                          />
              </div>
            </form>
            
            {/* respuesta  del servidor */}

            {errorMessage && (
              <div className="bg-fail text-white text-center mb-2 pb-3 mt-2">
                {errorMessage}
              </div>
            )}

            {/* si se envia con exito */}
            {isSubmitted && (
              <div className="bg-p text-white text-center mb-2  pb-3 mt-2">
                Procesando su solicitud
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}