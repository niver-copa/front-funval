import React, { useEffect } from 'react';
import { useState, handleSubmit } from 'react';
import axios from 'axios';

function RegistroVehiculo() {

  const [errores, setErrores] = useState({});


  const [userData, setUserData] = useState({
    matricula: '',
    modelo_id: '',
    anio: '',
    color: '',
    combustible_id: '',
    caja_id: '',
    descripcion: '',

    delantera_suspension_id: '',
    trasera_suspension_id: '',
    potencia: '',
    traccion: '',
    torque_maximo: '',
    ubicacion: '',
    cilindros: '',
    diametro_carrera: '',
    cilindraje: '',
    compresion: '',
    alimentacion: '',
    velocidades: '',
    frenos_delanteros: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData({
      ...userData,
      [id]: value,
    });

  };

  function Enviar() {
    console.log(userData)

    axios.post('http://localhost:8000/api/vehiculos', userData)
      .then((response) => {
        console.log('Usuario creado con éxito:', response.data);
      })
      .catch((error) => {
        const data = JSON.parse(error.request.response)["errors"];
        console.log(data);
        setErrores(data)
        setTimeout(() => {
          setErrores({});
        }, 10000);

      });

  }

  return (
    <div>

      <form className="container mx-auto py-8 mt-14">
        <h1 className="font-bold text-2xl border-b-2 border-blue-900 ">
          Registro de vehiculo
        </h1>

        <section className="flex justify-center space-x-12 mt-4">

          <div className="flex-col  flex w-40">
            <h1 className="font-bold border-b-2 border-blue-900 w-40">Datos generales:</h1>

            <label htmlFor="color" className="mt-2">Matricula</label>
            <input id="color" type="text" className=" border-2 border-blue-900 rounded-lg" value={userData.color} onChange={handleInputChange} />

            <label htmlFor="marca" className="mt-2">Marca:</label>
            <select id="marca" className=" border-2 border-blue-900 rounded-lg" value={userData.marca} onChange={handleInputChange}>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
            </select>

            <label htmlFor="marca" className="mt-2">Modelo:</label>
            <select id="marca" className=" border-2 border-blue-900 rounded-lg" value={userData.marca} onChange={handleInputChange}>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
            </select>

            <label htmlFor="color" className="mt-2">Año</label>
            <input id="color" type="text" className=" border-2 border-blue-900 rounded-lg" value={userData.color} onChange={handleInputChange} />

            <label htmlFor="color" className="mt-2">Color</label>
            <input id="color" type="text" className=" border-2 border-blue-900 rounded-lg" value={userData.color} onChange={handleInputChange} />

            <label htmlFor="marca" className="mt-2">Combustible:</label>
            <select id="marca" className=" border-2 border-blue-900 rounded-lg" value={userData.marca} onChange={handleInputChange}>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
            </select>

            <label htmlFor="marca" className="mt-2">Caja:</label>
            <select id="marca" className=" border-2 border-blue-900 rounded-lg" value={userData.marca} onChange={handleInputChange}>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
              <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
            </select>


          </div>

          <div className="flex-col flex">

            <label htmlFor="image" className=" font-bold border-b-2 border-blue-900 w-48">Subir foto del vehiculo</label>
            <div className="h-52 w-96 rounded-lg border-2 border-blue-900 overflow-hidden mt-2">
              <img className="w-full h-full object-cover " src="./fondo.png" alt="user" />
            </div>

            <input type="file" id="image" className="font-bold mt-2" value={userData.imagen} onChange={handleInputChange} />



            <label htmlFor="precio" className="font-bold border-b-2 border-blue-900 w-40">Precio</label>
            <div className="relative mt-2">
              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                payments
              </span>
              <input id="precio" type="text" className="w-42 border-2 border-blue-900 rounded-lg pl-8" value={userData.precio} onChange={handleInputChange} />
            </div>

            <label htmlFor="descripcion" className="font-bold border-b-2 border-blue-900 w-40">Descripcion</label>
            <textarea id="descripcion" className="border-2 border-blue-900 w-96 h-28 rounded-lg mt-2 p-2" value={userData.descripcion} onChange={handleInputChange}></textarea>
          </div>

          <div> <h1 className="font-bold border-b-2 border-blue-900 w-40">Datos Tecnicos:</h1>

            <div className="grid grid-cols-2 gap-x-4 ">
              <label htmlFor="marca" className="mt-2">Suspecion Delantera: <br />
                <select id="marca" className=" border-2 border-blue-900 rounded-lg w-full" value={userData.marca} onChange={handleInputChange}>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
                </select>
              </label>

              <label htmlFor="marca" className="mt-2 ">Suspecion Trasera: <br />
                <select id="marca" className=" border-2 border-blue-900 rounded-lg w-full" value={userData.marca} onChange={handleInputChange}>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Toyota</option>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Mitsubishi</option>
                  <option value="marca" onChange={(e) => setMarca(e.target.value)}>Chevrolet</option>
                </select>
              </label>

              <label htmlFor="caja" className="mt-2">Potencia<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Traccion<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Torque Maximo<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Ubicaion<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Cilindros<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Carreta<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Cilindraje<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Compresion<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Alimentacion<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Velocidades<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>

              <label htmlFor="caja" className="mt-2">Frenos<br />
                <input id="caja" type="text" className="w-full border-2 border-blue-900 rounded-lg " value={userData.caja} onChange={handleInputChange} />
              </label>



            </div>

          </div>
        </section>

        <section className="font-semibold text-xl text-center text-red-400 mt-4">
          <h1   >
            {Object.entries(errores).map(([clave, valor]) => (
              <li key={clave}>
                <strong>{clave}:</strong> {valor}
              </li>
            ))}
          </h1>

          <button
            type='button'
            className="bg-blue-900 text-white font-bold py-2 px-10 rounded"
            onClick={Enviar}
          >
            Registrar
          </button>
        </section>

      </form>
    </div>
  );
}

export default RegistroVehiculo;
