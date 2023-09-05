import React, { useEffect } from "react";
import { useState, handleSubmit } from "react";

import axios from "axios";


function CrearSuspension() {
    
  const [msj, setMsj] = useState({});

  const [suspensionData, setSuspensionData] = useState({
    tipo: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSuspensionData({
      ...suspensionData,
      [id]: value,
    });
  };

  function Enviar(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datos = {};
    
    formData.forEach((value, id) => {
      setSuspensionData((suspensionData) => ({
        ...suspensionData,
        [id]: value,
      }));

      datos[id] = value;
    });
    console.log(datos);
    axios
      .post("http://localhost:8000/api/suspensiones", datos)
      .then((response) => {
        console.log("Suspension creada con éxito:", response.data);
        
        //setMsj(response.data);
        window.location.href = "/suspensiones"
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setMsj({});
    }, 20000);
  }

  return (
    <div className="max-w-md mx-auto mt-28 p-4 bg-white shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-8 flex justify-center ">
        Nuevo Tipo de Suspension
      </h2>
      <form className="flex flex-col gap-[20px] w-160" onSubmit={Enviar}>
        <div className="w-160 flex flex-col gap-[10px]">
          <label htmlFor="tipo" className="font-medium mb-1">
            Tipo
          </label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={suspensionData.tipo}
            onChange={handleInputChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-3 mb-6"
        >
          Guardar Suspension
        </button>
      </form>
    </div>
  );
}
export default CrearSuspension;
