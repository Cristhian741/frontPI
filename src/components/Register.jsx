import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import Title from "./Title";
import Button from "./Button";



export default function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate(); // Redirigir luego de exitoso registro

    // Nuevo estado para el mensaje de error del servidor
    const [errorMessage, setErrorMessage] = useState("");

  // este useState es para manejar el div de formulario enviado con exito
  const [isSubmitted, setIsSubmitted] = useState(false);

  //campos vacios
  const [camposVacios, setCamposVacios] = useState(false);

  //email formato incorrecto

  const [validEmail, setValidEmail] = useState(false);

  //phone valido 10 digitos

  const [validPhone, setValidPhone] = useState(false);

  //password y repeatPassword sean iguales

  const [passwordValid, setPasswordValid] = useState(false);

  //parametros password validos

  const [passwordReg, setPasswordReg] = useState(false);

  //nameUser Valido

  const [nameUserValid, setNameUserValid] = useState(false);

  //para eliminar los espacios en blanco
  const removeWhiteSpace = (value) => value.replace(/^\s+/g, "");

  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion formulario campos vacios
    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      nameUser.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === "" ||
      repeatPassword.trim() === ""
    ) {
      setCamposVacios(true);
      setTimeout(() => {
        setCamposVacios(false); // Cambia el estado a false después de 2 segundos
      }, 2000);
      return;
    }

      // Validación de nameUser
  const nameUserRegex = /^[A-Za-z0-9]+$/;
  if (!nameUserRegex.test(nameUser)) {

    setNameUserValid(true);
    setTimeout(() => {
      setNameUserValid(false); // Cambia el estado a false después de 2 segundos
    }, 3000);
    // Muestra un mensaje de error o realiza la acción necesaria cuando nameUser no cumple con los requisitos
    console.log("El campo nameUser debe contener solo letras mayúsculas o minúsculas, números y no debe contener espacios");
    return;
  }

    // Validación del formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidEmail(true);
      setTimeout(() => {
        setValidEmail(false); // Cambia el estado a false después de 2 segundos
      }, 2000);

      return;
    }

    //validacion 10 digitos para el telefono
    const phoneRegex = /^[1-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      setValidPhone(true);
      setTimeout(() => {
        setValidPhone(false); // Cambia el estado a false después de 2 segundos
      }, 2000);
      // Muestra un mensaje de error o realiza la acción necesaria cuando el campo phone no tiene 10 dígitos
      console.log("El campo phone debe contener exactamente 10 dígitos");
      return;
    }

    //que password cumpla con los requisitos
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordReg(true);
      setTimeout(() => {
        setPasswordReg(false); // Cambia el estado a false después de 2 segundos
      }, 3000);
      // Muestra un mensaje de error o realiza la acción necesaria cuando la contraseña no cumple con los requisitos
      console.log(
        "La contraseña debe contener al menos 8 caracteres, una letra mayúscula y un número"
      );
      return;
    }

    // Validación que password y repeatPassword sean iguales
    if (password !== repeatPassword) {
      setPasswordValid(true);
      setTimeout(() => {
        setPasswordValid(false); // Cambia el estado a false después de 2 segundos
      }, 3000);

      // Muestra un mensaje de error o realiza la acción necesaria cuando los campos no son iguales
      console.log("Los campos de contraseña no coinciden");
      return;
    }

    axios
      .post("http://localhost:8080/auth/crear", {
        name: name,
        lastName: lastName,
        nameUser: nameUser,
        email: email,
        phone: phone,
        password: password,
        
      })
      .then((response) => {
        console.log(response.data); // Muestra la respuesta del servidor en la consola
        setIsSubmitted(true); // Establece la variable de estado a true cuando se envía el formulario
        setTimeout(() => {
          setIsSubmitted(false); // Cambia el estado a false después de 4.5 segundos
          navigate("/bienvenida"); // Redirige al usuario a "/bienvenida" después del registro exitoso
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

  return (
    <>
    
      <div className="container-fluid bg-s text-white pt-5 pb-5 ">
        <div className="row">
          <Title 
              title="Registrarme"
          />
          <div className="col-12 ">
            <form onSubmit={handleSubmit} className="text-center">
              {/* name */}
              <label>Nombre</label>
              <div>
                <input
                  id="name"
                  type="string"
                  placeholder="ingrese su nombre"
                  value={name}
                  onChange={(e) => setName(removeWhiteSpace(e.target.value))}
                  className="input-moderno"
                />
              </div>
              {/* lastName */}
              <label>Apellido</label>
              <div>
                <input
                  id="lastName"
                  type="string"
                  placeholder="ingrese su Apellido"
                  value={lastName}
                  onChange={(e) =>
                    setLastName(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>
              {/* nameUser */}
              <label>Nombre de Usuario</label>
              <div>
                <input
                  id="nameUser"
                  type="string"
                  placeholder="ingrese su Nombre de Usuario"
                  value={nameUser}
                  onChange={(e) =>
                    setNameUser(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>

              {/* email */}
              <label>email</label>
              <div>
                <input
                  id="email"
                  type="string"
                  placeholder="ingrese su email"
                  value={email}
                  onChange={(e) => setEmail(removeWhiteSpace(e.target.value))}
                  className="input-moderno"
                />
              </div>
              {/*phone*/}
              <label>Telefono</label>
              <div>
                <input
                  id="phone"
                  type="string"
                  placeholder="ingrese su numero tel"
                  value={phone}
                  onChange={(e) => setPhone(removeWhiteSpace(e.target.value))}
                  className="input-moderno"
                />
              </div>

              {/* Password */}
              <label>Password</label>

              <div>
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

              {/*repeat Password */}
              <label>Repite Password</label>

              <div className="pb-2">
                <input
                  id="repeatPassword"
                  type="password"
                  placeholder="Reingrese su Password"
                  value={repeatPassword}
                  onChange={(e) =>
                    setRepeatPassword(removeWhiteSpace(e.target.value))
                  }
                  className="input-moderno"
                />
              </div>
              <Button
                            text="Enviar"
                            size="medium"
                            onClick= {handleSubmit}
                            
                          />
              
            </form>

            <div className="col-12 d-flex justify-content-end">
              <Link to="/sigin" className="iniciosesiontext mt-3">
              Ya tengo una cuenta, deseo iniciar Sesion. Click Aqui
              </Link>
            </div>

            {/* si se envia con exito */}
            {isSubmitted && (
              <div className="bg-exito text-white text-center mb-2  pb-3 mt-2">
                Se Registro Exitosamente{name}!
              </div>
            )}

            {/* Validar el email */}

            {validEmail && (
              <div className="bg-fail text-white text-center mb-2  pb-3 mt-2">
                El formato del email es invalido, verifique y vuelva a
                intentarlo.
              </div>
            )}

                  {/* Validar el nombre de usuario */}

                  {nameUserValid && (
              <div className="bg-fail text-white text-center mb-2  pb-3 mt-2">
                El campo nombre de usuario debe contener solo letras mayúsculas o minúsculas, números y no debe contener espacios.
              </div>
            )}
            {/* Validar el phone */}

            {validPhone && (
              <div className="bg-fail text-white text-center mb-2  pb-3 mt-2">
                El numero telefonico debe tener 10 caracteres y no comenzar con
                el numero 0.
              </div>
            )}

            {/* si los campos estan vacios */}

            {camposVacios && (
              <div className="bg-fail text-white text-center mb-2  pb-3 mt-2">
                Ningun campo puede permanecer vacio.
              </div>
            )}

            {/* Validar que las password enviadas sean iguales */}

            {passwordValid && (
              <div className="bg-fail text-white text-center mb-2 pb-3 mt-2">
                Las contraseñas ingresadas deben ser identicas.
              </div>
            )}

            {/* Validar que las password cumplan con los requisitos */}

            {passwordReg && (
              <div className="bg-fail text-white text-center mb-2 pb-3 mt-2">
                La contraseña debe contener al menos 8 caracteres, una letra
                mayúscula y un número.
              </div>
            )}

            {/* respuesta email ya esta del servidor */}

{errorMessage && (
  <div className="bg-fail text-white text-center mb-2 pb-3 mt-2">
    {errorMessage}
  </div>
)}

          </div>
        </div>
      </div>
    </>
  );
}
