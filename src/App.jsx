import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CarHome } from "./components/CarHome/CarHome";
import CardDetails from "./components/CarHome/CarDetails";
import ClientesRegistro from "./components/ClientesRegistro";
import RegistroVehiculo from "./components/RegistroVehiculo/registroVehiculo";
import CarNav from "./components/Nav/Nav";
import Lista from "./components/lista/lista";
import Marcas from "./components/Marcas/page";
import Modelos from "./components/Modelos/page";




function App() {
  return (
    <BrowserRouter>
     <CarNav/>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<ClientesRegistro />} />
        <Route path="/registro" element={<RegistroVehiculo />} />
        <Route path="/cardealer" element={<CarHome />} />
        <Route path="/cardealer/:name" element={<CardDetails />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/modelos" element={<Modelos />} />
      </Routes>
     
    </BrowserRouter>
   
  );
}

export default App;
