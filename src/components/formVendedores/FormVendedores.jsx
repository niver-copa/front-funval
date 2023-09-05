import { useState } from "react";

export default function FormVendedores() {
  const [formData, setFormData] = useState({
    nombre_empresa: "",
    telefono_empresa: "",
    direccion_empresa: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="h-screen">
        <div

          className="w-5/6 h-4/5 flex items-center justify-center content-center flex-col gap-4"
        >
          <label htmlFor="nombre_empresa" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Nombre de la Empresa</h3>
            <input
              value={formData.nombre_empresa}
              onChange={handleInputChange}
              type="text"
              name="nombre_empresa"
              id="nombre_empresa"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>

          <label htmlFor="telefono_empresa" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Teléfono de la Empresa</h3>
            <input
              value={formData.telefono_empresa}
              onChange={handleInputChange}
              type="text"
              name="telefono_empresa"
              id="telefono_empresa"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>

          <label htmlFor="direccion_empresa" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Dirección de la Empresa</h3>
            <input
              value={formData.direccion_empresa}
              onChange={handleInputChange}
              type="text"
              name="direccion_empresa"
              id="direccion_empresa"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>


        </div>

      </div>
    </>
  );
}
