import { useParams } from "react-router-dom";
import carData from "../../../CarData";
import CarNav from "./CarNav";
import Card from "./Card";
import SideBar from "./SideBar";
const CardDetails = () => {
  const params = useParams();

  const car = carData.find((car) => car.name === params.name);

  if (!car) {
    return <div>Automóvil no encontrado</div>;
  }
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col">
      <CarNav />
      <div className="w-full h-full flex">
        <div className="w-[60%] flex justify-center">
          <div className="mt-24 flex">
            <img src="/car1.png" alt="car" className="h-[500px]" />
          </div>
        </div>
        <div className="w-full md:w-[40%] h-full flex flex-wrap justify-center gap-5 pt-20">
          <div className="border border-zinc-200 w-[80%] h-[400px] flex flex-col gap-3">
            <div className="w-full border h-12 flex justify-between items-center px-3 bg-zinc-500 text-white mb-4">
              <span>{car.name}</span>
              <span>{car.price}</span>
            </div>
            <div className="px-3">
              <span>Marca: {car.brand}</span>
            </div>

            <div className="px-3">
              <span>Modelo: {car.name}</span>
            </div>

            <div className="px-3">
              <span>Año: {car.year}</span>
            </div>

            <div className="px-3">
              <span>Motor: {car.horsepower}</span>
            </div>

            <div className="px-3">
              <span>Eficiencia: {car.fuelEfficiency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
