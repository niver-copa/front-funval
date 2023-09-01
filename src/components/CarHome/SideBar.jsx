import { useState } from "react";

const optionData = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW"];

const SideBar = ({setFiltro}) => {

  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [precio_mi, setPrecio_mi] = useState('');
  const [precio_ma, setPrecio_ma] = useState('');
  const [anio, setAnio] = useState('');
 
  function buscar() {
    
    setFiltro({
      marca,
      modelo,
      precio_mi,
      precio_ma,
      anio,
    });
  }
 
  return (
    <div className="hidden md:w-[20%] h-screen md:flex justify-center  bg-[#f9f9f9] shadow-md">
      <form className="w-[90%] flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Marca</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese la marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Modelo</span>
          <select
          //  value={modelo}
          //  onChange={(e) => setModelo(e.target.value)}
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
          >
            {optionData.map((e,index) => (
              <option key={index} value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Precio Mínimo</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el precio mínimo"
            value={precio_mi}
            onChange={(e) => setPrecio_mi(e.target.value)}

          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Precio Máximo</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el precio máximo"
            value={precio_ma}
            onChange={(e) => setPrecio_ma(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Año</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el año"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          />
        </div>
        <button type="button" onClick={buscar} className="bg-blue-500 rounded-xl">Buscar</button>
      </form>
    </div>
  );
};

export default SideBar;
