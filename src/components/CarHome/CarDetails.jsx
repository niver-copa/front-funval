import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "../Nav/Nav";


const CardDetails = () => {
  const params = useParams();
  
  const [vehiculo, setVehiculo] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/vehiculos")
      .then((response) => {
        setVehiculo(response.data);
       
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const car = vehiculo.find((car) => car.id == params.id);

  

  if (!car) {
    return <div className="mt-28 text-xl text-center">Automóvil no encontrado</div>;
  }
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col">
      <Nav/>
      <div className="w-full h-full flex">
        <div className="w-[60%] flex justify-center">
          <div className="mt-24 flex">
            <img src="../car1.png" alt="car" className="h-[500px]" />
          </div>
        </div>
        <div className="w-full md:w-[40%] h-full flex flex-wrap justify-center gap-5 pt-20">
          <div className="border border-zinc-200 w-[80%] h-[400px] flex flex-col gap-3">
            <div className="w-full border h-12 flex justify-between items-center px-3 bg-zinc-500 text-white mb-4">
              <span>{car.modelo.nombre}</span>
              <span>
                {car.precio.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
            </div>
            <div className="px-3">
              <span>Marca: {car.modelo.marca.nombre}</span>
            </div>

            <div className="px-3">
              <span>Modelo: {car.modelo.nombre}</span>
            </div>

            <div className="px-3">
              <span>Año: {car.anio}</span>
            </div>

            <div className="px-3">
              <span>Motor: {car.potencia}</span>
            </div>

            <div className="px-3">
              <span>Velocidades: {car.velocidades}</span>
            </div>
            <div className="px-3">
              <span>Color: {car.color}</span>
            </div>

            <div className="px-3">
              <span>Combustible: {car.combustible.nombre}</span>
            </div>

            <a href={"/registro/"+car.id} className="bg-blue-600 w-20 rounded-lg text-center text-white cursor-pointer"> Editar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
