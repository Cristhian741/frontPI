
import GaleriaImagen from "./GaleriaImagen"

// creo una constante imagenes solo para simular las url proporcionadas luego por la api. donde le paso la ubicacion de "../assets/opelEjm1/opelA" opelB, OpelC, etc. 


const opel1970 = [
    "/opelEjm1/opelA.jpg",
    "/opelEjm1/opelB.jpg",
    "/opelEjm1/opelC.jpg",
    "/opelEjm1/opelD.jpg",
    "/opelEjm1/opelE.jpg",

    
]

console.log(opel1970)

export default function ListaAleatoriaImagenes() {
  return (
    <>

  {/* Esta galeria de imagen es llamada de esta manera en el componente, solo para probar el renderizado, debe ser formado este componente y recibir la constante de esta manera */}
        <GaleriaImagen
            imagenes= {opel1970}
        />
    
    </>
  )
}
