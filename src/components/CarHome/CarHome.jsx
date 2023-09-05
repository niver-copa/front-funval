import { useEffect, useState } from "react";
import axios from "axios";
// import carData from "../../../CarData";
import CarNav from "../Nav/Nav";
import Card from "./Card";
import SideBar from "./SideBar";
import Nav from "../Nav/Nav";

export const CarHome = () => {
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

  const [Filtro, setFiltro] = useState({
    marca: "",
    modelo: "",
    precio_mi: "",
    precio_ma: "",
    anio: "",
  });

  let filteredCars = vehiculo.filter((car) => {
   
console.log(car)
        let marca = Filtro.marca == "" || !Filtro.marca ? true : car.modelo.marca_id == Filtro.marca;
        let modelo = Filtro.modelo == "" ? true : car.modelo.id == Filtro.modelo;
        let precio_mi = Filtro.precio_mi == "" ? true : car.precio > Filtro.precio_mi;
        let precio_ma = Filtro.precio_ma == "" ? true : car.precio < Filtro.precio_ma;
        let anio = Filtro.anio == "" ? true : car.anio == Filtro.anio;
      return marca && modelo && precio_mi && precio_ma && anio;
    });
   

  return (
    <div className="max-w-screen w-full h-screen bg-[#f5f5f5] flex flex-col mt-14">
      <Nav />
      <div className="w-full h-full flex">
        <SideBar setFiltro={setFiltro} />
        <div className="w-full md:w-[80%] h-full flex flex-wrap justify-center gap-5 pt-20 overflow-y-auto max-h-screen">
          {filteredCars.map((e) => (
           
            <Card
              key={e.id}
              title={e.modelo.marca.nombre+" "+ e.modelo.nombre}
              img={"../car.png"}
              price={e.precio.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              link={e.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
