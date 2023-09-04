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


  const [select, setSelect] = useState()


  return (
    <Fragment>
      <main className=" h-screen bg-white justify-center items-center flex">
        <form
          action=""
          method=""
          className=" w-[90%] h-[70%] flex items-center justify-around bg-white rounded-3xl  shadow-slate-400 shadow-xl "
        >
          <div className=" flex flex-wrap w-[45%] h-[90%] justify-around items-center">
            <label htmlFor="nombre" className="relative">
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">Nombre</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">Apellido</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">Correo</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
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
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">Telefono</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">Sexo</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
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
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">País</h3>
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
              <h3 className=" ml-3 bg-white absolute px-2  bottom-8 rounded-lg shadow-sm">
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
              <h3 className=" ml-3 bg-white absolute px-2 bottom-8 rounded-lg shadow-sm">Dirección</h3>
              <input
                value={formData.direccion}
                onChange={handleInputChange}
                type="text"
                name="direccion"
                id="direccion"
                className="border-2 border-black rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
              />
            </label>
            <select className=" border-black border-2 py-2 pl-4 w-[200px]" name="select" id="select" onChange={e => setSelect(e.target.value)}>
              <option disabled selected>--Seleccione--</option>
              <option value="Proveedor">Proveedor</option>
              <option value="Cliente">Cliente</option>
              <option value="Vendedor">Vendedor</option>
            </select>
          </div>
          <div className=" flex flex-col justify-between w-[45%] h-[90%]">
            <div style={{ boxShadow: "inset -7px -7px  10px #dfdfdf" }} className="flex border w-full h-[80%] overflow-x-hidden overflow-y-scroll justify-center items-center" >
              {select === 'Proveedor' && <p>Option 1 selected</p>}
              {select === 'Cliente' && <p>Option 2 selected</p>}
              {select === 'Vendedor' && <p>Option 3 selected</p>}
            </div>
            <button className=" px-12 py-3 bg-blue-600 hover:bg-blue-400 text-white rounded-2xl transition-all duration-200">
              Registar
            </button>
          </div>

        </form>
      </main>
    </Fragment >
  );
}
