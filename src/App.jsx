import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CarHome } from "./components/CarHome/CarHome";
import CardDetails from "./components/CarHome/CarDetails";
import ClientesRegistro from "./components/ClientesRegistro";
import RegistroVehiculo from "./components/RegistroVehiculo/registroVehiculo";
import Nav from "./components/Nav/Nav";
import Lista from "./components/lista/lista";
import Marcas from "./components/Marcas/page";
import CrearMarca from "./components/Marcas/crearMarca";
import Modelos from "./components/Modelos/page";
import Suspensiones from "./components/Suspensiones/page";
import CrearSuspension from "./components/Suspensiones/CrearSuspension";




function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ClientesRegistro />} />
        <Route path="/registro/:id" element={<RegistroVehiculo />} />
        <Route path="/registro" element={<RegistroVehiculo />} />
        <Route path="/cardealer" element={<CarHome />} />
        <Route path="/cardealer/:id" element={<CardDetails />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/marcas/crear" element={<CrearMarca />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/suspensiones" element={<Suspensiones />} />
        <Route path="/suspensiones/crear" element={<CrearSuspension />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
