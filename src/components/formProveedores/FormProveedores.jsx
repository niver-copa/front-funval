import { Fragment, useState } from "react";

export default function FormProveedores() {
  const [formData, setFormData] = useState({
    nombre_empresa: "",
    telefono_empresa: "",
    direccion_empresa: "",
    email_empresa: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Fragment>
      <div className="  bg-white  flex">
        <div className=" w-full h-full flex flex-col flex-wrap items-center justify-center bg-white rounded-3xl gap-7 shadow-slate-400 shadow-xl p-5">
          <label htmlFor="nombre_empresa" className="relative w-full">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Nombre de la empresa
            </h3>
            <input
              value={formData.nombre_empresa}
              onChange={handleInputChange}
              type="text"
              name="nombre_empresa"
              id="nombre_empresa"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="email_empresa" className="relative w-full">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Correo de la empresa
            </h3>
            <input
              value={formData.email_empresa}
              onChange={handleInputChange}
              type="text"
              name="email_empresa"
              id="email_empresa"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="direccion_empresa" className="relative w-full">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">
              Dirección de la empresa
            </h3>
            <input
              value={formData.direccion_empresa}
              onChange={handleInputChange}
              type="text"
              name="direccion_empresa"
              id="direccion_empresa"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="telefono_empresa" className="relative w-full">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">
              Telefono de la empresa
            </h3>
            <input
              value={formData.telefono_empresa}
              onChange={handleInputChange}
              type="text"
              name="telefono_empresa"
              id="telefono_empresa"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
        </div>
      </div>
    </Fragment>
  );
}
