import { useState } from "react";
function FormClientes() {
  const [formData, setFormData] = useState({
    referencias: "",
    historial_de_compras: "",
    nivel_de_satisfaccion: "",
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
      <div onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 w-160">
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
          <label
            htmlFor="historial_de_compras"
            className="block font-medium mb-1"
          >
            Hist. de Compras
          </label>
          <textarea
            id="historial_de_compras"
            value={formData.histdecompras}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="nivel_de_satisfaccion"
            className="block font-medium mb-1"
          >
            Nivel Satisfacción
          </label>
          <input
            type="number"
            id="nivel_de_satisfaccion"
            value={formData.niveldesatisfacion}
            onChange={handleInputChange}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comentarios_observaciones"
            className="block font-medium mb-1"
          >
            Observaciones
          </label>
          <textarea
            id="comentarios_observaciones"
            value={formData.observaciones}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
export default FormClientes;
