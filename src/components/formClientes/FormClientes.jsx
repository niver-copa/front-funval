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
      <h2 className="text-xl font-semibold mb-8 flex justify-center ">
        Registro de Clientes
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 w-160">
        <div className="mb-4">
          <label htmlFor="referencias" className="block font-medium mb-1">
            Referencias
          </label>
          <textarea
            id="referencias"
            value={formData.referencias}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-100 resize-none"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
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
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 col-span-3 mb-6"
        >
          Registrar Cliente
        </button>
      </form>
    </div>
  );
}
export default FormClientes;
