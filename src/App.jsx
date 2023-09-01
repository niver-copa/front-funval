import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { CarHome } from "./components/CarHome/CarHome";
import CardDetails from "./components/CarHome/CarDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardealer" element={<CarHome />} />
        <Route path="/cardealer/:name" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
