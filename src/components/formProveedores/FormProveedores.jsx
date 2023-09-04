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
      <main className=" h-screen bg-white justify-center items-center flex">
        <div
          action=""
          method=""
          className=" w-[50%] h-[70%] flex flex-col flex-wrap items-center justify-center bg-white rounded-3xl gap-7 shadow-slate-400 shadow-xl "
        >
          <h1>REGISTRO DE PROVEEDORES</h1>
          <label htmlFor="nombre" className="relative w-[70%]">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Nombre de la empresa
            </h3>
            <input
              value={formData.nombre_empresa}
              onChange={handleInputChange}
              type="text"
              name="nombre"
              id="nombre"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="correo" className="relative w-[70%]">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Correo de la empresa
            </h3>
            <input
              value={formData.email_empresa}
              onChange={handleInputChange}
              type="text"
              name="correo"
              id="correo"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="direccion" className="relative w-[70%]">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">
              Dirección de la empresa
            </h3>
            <input
              value={formData.direccion_empresa}
              onChange={handleInputChange}
              type="text"
              name="direccion"
              id="direccion"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
          <label htmlFor="telefono" className="relative w-[70%]">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">
              Telefono de la empresa
            </h3>
            <input
              value={formData.telefono_empresa}
              onChange={handleInputChange}
              type="text"
              name="telefono"
              id="telefono"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none w-full"
            />
          </label>
        </div>
      </main>
    </Fragment>
  );
}
