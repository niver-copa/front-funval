import { useEffect, useState } from "react";
import axios from 'axios';
// import carData from "../../../CarData";
import CarNav from "../Nav/Nav";
import Card from "./Card";
import SideBar from "./SideBar";

export const CarHome = () => {

  const [vehiculo, setVehiculo] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/vehiculos')
      .then((response) => {
        setVehiculo(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [Filtro, setFiltro] = useState({
    marca: "",
    modelo: "",
    precio_mi: "",
    precio_ma: "",
    anio: ""
  });

 

 
  let filteredCars = vehiculo.filter(car => {
    const marca = Filtro.precio_mi == "" ? true : car.precio > Filtro.precio_mi;
    const modelo = Filtro.modelo == "" ? true : car.modelo.nombre == Filtro.modelo;
    const precio_mi = Filtro.precio_mi == "" ? true : car.precio > Filtro.precio_mi;
    const precio_ma = Filtro.precio_ma == "" ? true : car.precio < Filtro.precio_ma;
    const anio = Filtro.anio == "" ? true : car.anio == Filtro.anio;


    return  (marca && modelo && precio_mi && precio_ma && anio )
  });


  return (
    <div className="max-w-screen w-full h-screen bg-[#f5f5f5] flex flex-col mt-14">
     
      <div className="w-full h-full flex">
        <SideBar setFiltro={setFiltro} />
        <div className="w-full md:w-[80%] h-full flex flex-wrap justify-center gap-5 pt-20 overflow-y-auto max-h-screen">
          {filteredCars.map((e) => (
            <Card
              key={e.id}
              title={e.modelo.nombre}
              img={"/car1.png"}
              price={e.precio.toLocaleString('en-US', { style: 'currency',currency: 'USD'})}
              link={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
