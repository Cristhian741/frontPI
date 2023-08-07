import { AiOutlineSearch } from "react-icons/ai";
import InputBuscador from "./InputBuscador";

export default function BuscadorPrincipal() {
  return (
    <>
        <div className="container-fluid">
            <div className="row bg-s">
                <div className="col-12 text-center color-five">
                    <h5 className="buscaPrincipal">Busca Vehiculos por: Marca, Tipo, Modelo, Año </h5>
                </div>
                <div className="col-4 d-flex justify-content-end ">
                    <AiOutlineSearch
                        className="logoLupa"
                    />
                </div>
                <div className="col-8">
                    <InputBuscador/>
                </div>
            </div>

        </div>
    </>
  )
}
