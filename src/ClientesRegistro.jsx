import React, { useState } from "react";

const ClientesRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sexo, setSexo] = useState("");
  const [edad, setEdad] = useState("");
  const [referencias, setReferencias] = useState("");
  const [historialCompras, setHistorialCompras] = useState("");
  const [nivelSatisfaccion, setNivelSatisfaccion] = useState("");
  const [observaciones, setObservaciones] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar el registro del cliente con todos los campos.
    // Por ahora, solo mostrar datos en la consola.
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Teléfono:", telefono);
    console.log("Email:", email);
    console.log("Dirección:", direccion);
    console.log("Sexo:", sexo);
    console.log("Edad:", edad);
    console.log("Referencias:", referencias);
    console.log("Historial de Compras:", historialCompras);
    console.log("Nivel de Satisfacción:", nivelSatisfaccion);
    console.log("Observaciones:", observaciones);
    // Limpia los campos después del registro.
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setDireccion("");
    setSexo("");
    setEdad("");
    setReferencias("");
    setHistorialCompras("");
    setNivelSatisfaccion("");
    setObservaciones("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md ">
      <h2 className="text-xl font-semibold mb-8 flex justify-center ">
        Registro de Clientes
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3 w-160">
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-medium mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block font-medium mb-1">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block font-medium mb-1">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block font-medium mb-1">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sexo" className="block font-medium mb-1">
            Sexo
          </label>
          <select
            id="sexo"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">Seleccionar</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="edad" className="block font-medium mb-1">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="referencias" className="block font-medium mb-1">
            Referencias
          </label>
          <textarea
            id="referencias"
            value={referencias}
            onChange={(e) => setReferencias(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-100"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="historialCompras" className="block font-medium mb-1">
            Hist. de Compras
          </label>
          <textarea
            id="historialCompras"
            value={historialCompras}
            onChange={(e) => setHistorialCompras(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
            value={nivelSatisfaccion}
            onChange={(e) => setNivelSatisfaccion(e.target.value)}
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="observaciones" className="block font-medium mb-1">
            Observaciones
          </label>
          <textarea
            id="observaciones"
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
};

export default ClientesRegistro;
