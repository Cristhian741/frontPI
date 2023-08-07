import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from "./components/Header";
import Register from "./components/Register";
import Tema from "./components/Tema";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap (si aún no lo has hecho)
import SigIn from "./components/SigIn";
import Home from "./pages/Home";
import RegistroProducto from "./components/RegistroProducto";
import DetalleProducto from "./components/DetalleProducto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/> 
        <div className="mt-100"></div>
        <Routes>
        
          <Route exact path="/" element={<Tema />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/sigin" element={<SigIn/>} />
          <Route path="/administracion" element={<RegistroProducto/>} />
          <Route path="/detalleProducto" element={<DetalleProducto/>} />

          
        </Routes>
        <div/>
        
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
