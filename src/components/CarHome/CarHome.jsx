import carData from "../../../CarData";
import CarNav from "./CarNav";
import Card from "./Card";
import SideBar from "./SideBar";

export const CarHome = () => {
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col">
      <CarNav />
      <div className="w-full h-full flex">
        <SideBar />
        <div className="w-full md:w-[80%] h-full flex flex-wrap justify-center gap-5 pt-20 overflow-y-auto max-h-screen">
          {carData.map((e) => (
            <Card
              key={e.name}
              title={e.name}
              img={"/car1.png"}
              price={e.price}
              link={e.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
