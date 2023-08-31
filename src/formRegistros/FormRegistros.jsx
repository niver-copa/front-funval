import { Fragment } from "react";

export default function FormRegistros() {
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
              type="text"
              name=""
              id="nombre"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="apellido" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Apellido</h3>
            <input
              type="text"
              name=""
              id="apellido"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="correo" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Correo</h3>
            <input
              type="text"
              name=""
              id="correo"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="contra" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Contraseña
            </h3>
            <input
              type="password"
              name=""
              id="contra"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="telefono" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">Telefono</h3>
            <input
              type="text"
              name=""
              id="telefono"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="sexo" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Sexo</h3>
            <input
              type="text"
              name=""
              id="sexo"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="fecha" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Fec. de Nacimiento
            </h3>
            <input
              type="text"
              name=""
              id="fecha"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="documento" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Doc. de Identidad
            </h3>
            <input
              type="text"
              name=""
              id="documento"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="pais" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">País</h3>
            <input
              type="text"
              name=""
              id="pais"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="codPostal" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">
              Código Postal
            </h3>
            <input
              type="text"
              name=""
              id="codPostal"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <label htmlFor="direccion" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2 bottom-8">Dirección</h3>
            <input
              type="text"
              name=""
              id="direccion"
              className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>
          <button className=" px-8 py-3 bg-blue-600 text-white rounded-2xl">
            Registar
          </button>
        </form>
      </main>
    </Fragment>
  );
}
