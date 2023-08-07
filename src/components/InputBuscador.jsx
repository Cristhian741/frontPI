import { useState } from "react";
import Button from "./Button";
import '../scss/stylesComponent/_inputBuscador.scss'


export default function InputBuscador() {

  //para eliminar los espacios en blanco
  const removeWhiteSpace = (value) => value.replace(/^\s+/g, "");

  const [buscador, setBuscador] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();


  }


  return (
    <>
      <form onSubmit={handleSubmit} className="buscador_form">
        <input
          id="buscador"
          type="string"
          placeholder="  Buscar"
          value={buscador}
          onChange={(e) => setBuscador(removeWhiteSpace(e.target.value))}
          className="inputLupa"
        />
        <Button
          text="Buscar"
          size="small"
          onClick={handleSubmit}
        />
      </form>


    </>
  )
}
