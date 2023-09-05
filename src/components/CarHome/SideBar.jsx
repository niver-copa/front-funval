import { useEffect, useState } from "react";
import axios from 'axios';

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
 
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [modelosOriginales, setModelosOriginales] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/marcas')
      .then((response) => {
        setMarcas(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get('http://127.0.0.1:8000/api/modelos')
      .then((response) => {
       
        setModelosOriginales(response.data);
        
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  function cambiarModelos(event) {
    setModelos(modelosOriginales);
    const marcaSeleccionadaId = parseInt(event.target.value);
    definirMarca(marcaSeleccionadaId);
    
    const modelosFiltrados = modelosOriginales.filter(modelo => modelo.marca_id === marcaSeleccionadaId);
    
    setModelos(modelosFiltrados);
  }
  function definirMarca(idMarca){
    const brand = marcas.filter(m => m.id == idMarca);
    const nombre = brand[0].nombre;
    setMarca(nombre);
    
  }
  function definirModelo(event){
    const modeloId = parseInt(event.target.value);
    const model = modelos.filter(m => m.id == modeloId);
    const nombre = model[0].nombre;
    setModelo(nombre);
    
  }
  return (
    <div className="hidden md:w-[20%] h-screen md:flex justify-center  bg-[#f9f9f9] shadow-md">
      <form className="w-[90%] flex flex-col gap-6 mt-10">

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Marca</span>
          <select
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="modelo"
            onChange={cambiarModelos}
          >
            <option value="" disable="true"></option>
            {marcas.map((e,index) => (
              <option key={index} value={e.id}>{e.nombre}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Modelo</span>
          <select
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            onChange={definirModelo}
          ><option value="" disable="true"></option>
            {modelos.map((e,index) => (
              <option key={index} value={e.id}>{e.nombre}</option>
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
