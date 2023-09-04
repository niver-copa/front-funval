import { useState } from "react";
function FormClientes() {
  const [formData, setFormData] = useState({
    referencias: "",
    histdecompras: "",
    niveldesatisfacion: "",
    observaciones: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md ">
      <div onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-3">
        <div className="mb-4">
          <label htmlFor="referencias" className="block font-medium mb-1">
            Referencias
          </label>
          <textarea
            id="referencias"
            value={formData.referencias}
            onChange={handleInputChange}
            className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="historialCompras" className="block font-medium mb-1">
            Hist. de Compras
          </label>
          <textarea
            id="historialCompras"
            value={formData.histdecompras}
            onChange={handleInputChange}
            className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="nivelSatisfaccion" className="block font-medium mb-1">
            Nivel Satisfacción
          </label>
          <input
            type="number"
            id="nivelSatisfaccion"
            value={formData.niveldesatisfacion}
            onChange={handleInputChange}
            className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="observaciones" className="block font-medium mb-1">
            Observaciones
          </label>
          <textarea
            id="observaciones"
            value={formData.observaciones}
            onChange={handleInputChange}
            className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default FormClientes;
