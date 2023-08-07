import { useState } from "react";
import Title from "./Title";
import axios from "axios";
import Button from "./Button";

export default function SigIn() {
  // Nuevo estado para el mensaje de error del servidor
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // este useState es para manejar el div de formulario enviado con exito
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/usuario/crear", {
        email: email,
        password: password,
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
      <div className="container-fluid bg-s text-white pb-5 pt-5">
        <div className="row pb-5">
          <Title title="Inicio de Sesión" />
          <div className="col-12 ">
            <form onSubmit={handleSubmit} className="text-center">
              {/* email */}

              <div className="pb-2">
                <input
                  id="email"
                  type="string"
                  placeholder="ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(removeWhiteSpace(e.target.value))}
                  className="input-moderno"
                />
              </div>

              {/* Password */}

              <div className="pb-2">
                <input
                  id="password"
                  type="password"
                  placeholder="ingrese su Password"
                  value={password}
                  onChange={(e) =>
                    setPassword(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>
              <Button
                            text="Iniciar Sesion"
                            size="medium"
                            onClick= {handleSubmit}
                          />
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
