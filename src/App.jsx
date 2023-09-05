import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Notification from "./components/Notification"
import { Home } from "./components/Home";
import FormRegistros from "./components/formRegistros/FormRegistros";
import { CarHome } from "./components/CarHome/CarHome";
import RegistroVehiculo from "./components/RegistroVehiculo/registroVehiculo";
import FormProveedores from "./components/formProveedores/FormProveedores"

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/nouser" element={<Notification message="No valid Login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clientes" element={<FormRegistros />} />
          <Route path="/cardealer" element={<CarHome />} />
          <Route path="/registro" element={<RegistroVehiculo />} />
          <Route path="/proveedores" element={<FormProveedores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;