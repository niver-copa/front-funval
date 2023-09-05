import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Notification from "./components/Notification"
import { Home } from "./components/Home";
import FormRegistros from "./components/formRegistros/FormRegistros";
import { CarHome } from "./components/CarHome/CarHome";
import VistaCliente from "./components/vistaCliente/VistaCliente"
import VistaProveedor from "./components/vistaProveedor/VistaProveedor"
import VistaVendedor from "./components/vistaVendedor/VistaVendedor"

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nouser" element={<Notification message="No valid Login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cardealer" element={<CarHome />} />
          <Route path="/registros" element={<FormRegistros />} />
          <Route path="/vendedores" element={<VistaVendedor />} />
          <Route path="/clientes" element={<VistaCliente />} />
          <Route path="/proveedores" element={<VistaProveedor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;