import { Fragment, useState } from "react";

export default function FormRegistros() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contra: "",
    telefono: "",
    sexo: "",
    fecha: "",
    documento: "",
    pais: "",
    codPostal: "",
    direccion: "",
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
        <form
          action=""
          method=""
          className=" w-[90%] h-[70%] flex flex-row flex-wrap items-center justify-center bg-white rounded-3xl gap-7 shadow-slate-400 shadow-xl "
        >
          <label htmlFor="nombre" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Nombre</h3>
            <input
              value={formData.nombre}
              onChange={handleInputChange}
              type="text"
              name="nombre"
              id="nombre"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="apellido" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Apellido</h3>
            <input
              value={formData.apellido}
              onChange={handleInputChange}
              type="text"
              name="apellido"
              id="apellido"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="correo" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Correo</h3>
            <input
              value={formData.correo}
              onChange={handleInputChange}
              type="text"
              name="correo"
              id="correo"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="contra" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Contraseña
            </h3>
            <input
              value={formData.contra}
              onChange={handleInputChange}
              type="password"
              name="contra"
              id="contra"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="telefono" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">Telefono</h3>
            <input
              value={formData.telefono}
              onChange={handleInputChange}
              type="text"
              name="telefono"
              id="telefono"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="sexo" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Sexo</h3>
            <input
              value={formData.sexo}
              onChange={handleInputChange}
              type="text"
              name="sexo"
              id="sexo"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="fecha" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Fec. de Nacimiento
            </h3>
            <input
              value={formData.fecha}
              onChange={handleInputChange}
              type="text"
              name="fecha"
              id="fecha"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="documento" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Doc. de Identidad
            </h3>
            <input
              value={formData.documento}
              onChange={handleInputChange}
              type="text"
              name="documento"
              id="documento"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="pais" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">País</h3>
            <input
              value={formData.pais}
              onChange={handleInputChange}
              type="text"
              name="pais"
              id="pais"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="codPostal" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Código Postal
            </h3>
            <input
              value={formData.codPostal}
              onChange={handleInputChange}
              type="text"
              name="codPostal"
              id="codPostal"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="direccion" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">Dirección</h3>
            <input
              value={formData.direccion}
              onChange={handleInputChange}
              type="text"
              name="direccion"
              id="direccion"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <button className=" px-12 py-3 hover:bg-blue-300 hover:text-white bg-blue-600  text-white rounded-2xl">
            Registar
          </button>

        </form>
      </main>
    </Fragment>
  );
}
