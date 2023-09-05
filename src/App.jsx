import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Notification from "./components/Notification"
import { Home } from "./components/Home";
import FormRegistros from "./components/formRegistros/FormRegistros";
import { CarHome } from "./components/CarHome/CarHome";

import CardDetails from "./components/CarHome/CarDetails";
import RegistroVehiculo from "./components/RegistroVehiculo/registroVehiculo";
import Nav from "./components/Nav/Nav";
import Lista from "./components/lista/lista";
import Marcas from "./components/Marcas/page";
import CrearMarca from "./components/Marcas/crearMarca";
import Modelos from "./components/Modelos/page";
import Suspensiones from "./components/Suspensiones/page";
import CrearSuspension from "./components/Suspensiones/CrearSuspension";
import VistaCliente from "./components/vistaCliente/VistaCliente"
import VistaProveedor from "./components/vistaProveedor/VistaProveedor"
import VistaVendedor from "./components/vistaVendedor/VistaVendedor"


function App() {
  return (
    <div>
    <BrowserRouter>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nouser" element={<Notification message="No valid Login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clientes" element={<VistaCliente />} />
        <Route path="/registro/:id" element={<RegistroVehiculo />} />
        <Route path="/registro" element={<RegistroVehiculo />} />
        <Route path="/registros" element={<FormRegistros />} />
        <Route path="/cardealer" element={<CarHome />} />
        <Route path="/cardealer/:id" element={<CardDetails />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/marcas/crear" element={<CrearMarca />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/suspensiones" element={<Suspensiones />} />
        <Route path="/suspensiones/crear" element={<CrearSuspension />} />
        <Route path="/proveedores" element={<VistaProveedor />} />
        <Route path="/vendedores" element={<VistaVendedor />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;