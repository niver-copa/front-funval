import React from 'react';

function RegistroVehiculo() {
  return (
    <div>
      
      <main className="container mx-auto py-8 mt-14">
        <h1 className="font-bold text-2xl border-b-2 border-blue-900 ">
          Registro de vehiculo
        </h1>
        <section className="flex justify-center space-x-12">
          <div className="flex-col pt-2 flex w-56">
            <h1 className="font-bold border-b-2 border-blue-900 w-40">Datos generales:</h1>
            <div className="flex-col space-x-2 pt-2">
              <label htmlFor="matricula">Matricula</label>
              <input id="matricula" type="text" className="w-28 border-2 border-blue-900 rounded-lg" />
                <br></br>
             
              <label htmlFor="color" className="mt-2">Color</label>
              <input id="color" type="text" className="w-28 border-2 border-blue-900 rounded-lg mt-2" />
                <br></br>
              <label htmlFor="marca" className="mt-2">Marca:</label>
              <select id="marca" className="mt-2 bg-blue-900 text-white font-bold rounded-lg p-2">
                <option value="">Toyota</option>
                <option value="">Mitsubishi</option>
                <option value="">Chevrolet</option>
              </select>
                <br></br>

              <label htmlFor="modelo" className="mt-2">Modelo:</label>
              <select id="modelo" className="mt-2 bg-blue-900 text-white font-bold rounded-lg p-2">
                <option value="">unknow</option>
                <option value="">unknow</option>
                <option value="">unknow</option>
              </select>
              <br></br>

              <label htmlFor="Tipo de vehiculo" className="mt-2">Tipo de vehiculo:</label>
              <select id="Tipo de vehiculo" className="mt-2 bg-blue-900 text-white font-bold rounded-lg p-2">
                <option value="">unknow</option>
                <option value="">unknow</option>
                <option value="">unknow</option>
              </select>
              <br></br>

              <label htmlFor="date" className="mt-2">Age:</label>
              <input id="date" type="date" className="w-28 border-2 border-blue-900 rounded-lg p-2 mt-2 mb-2" />
              <br></br>

              <label htmlFor="condicion" className="mt-4">Condicion:</label>
              <div className="mt-2">
                <input type="radio" id="nuevo" name="condicion" />
                <label htmlFor="nuevo" className="ml-1">Nuevo</label>
                <input type="radio" id="usado" name="condicion" className="ml-4" />
                <label htmlFor="usado" className="ml-1">Usado</label>
              </div>
            </div>
          </div>

          <div className="flex-col pt-2 flex ">
            <h1 className="font-bold border-b-2 border-blue-900 w-40">Datos Tecnicos:</h1>
            <div className="pt-2 flex flex-col w-56">
              <label htmlFor="caja" className="mt-2">Caja</label>
              <input id="caja" type="text" className="w-40 border-2 border-blue-900 rounded-lg " />
             
              <label htmlFor="potencia" className="mt-2">Potencia</label>
              <input id="potencia" type="text" className="w-40 border-2 border-blue-900 rounded-lg " />
              
              <label htmlFor="traccion" className="mt-2">Traccion</label>
              <input id="traccion" type="text" className="w-40 border-2 border-blue-900 rounded-lg " />
              
              <label htmlFor="Suspension del" className="mt-2">Suspension delantera</label>
              <input id="Suspension del" type="text" className="w-40 border-2 border-blue-900 rounded-lg " />
              
              <label htmlFor="Suspension tra" className="mt-2">Suspension trasera</label>
              <input id="Suspension tra" type="text" className="w-40 border-2 border-blue-900 rounded-lg " />
            </div>
          </div>
        </section>

        <section className="flex justify-center pt-4">
          <div className="flex-col flex">
            <label htmlFor="precio" className="font-bold border-b-2 border-blue-900 w-40">Precio</label>
            <div className="relative mt-2">
              <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                payments
              </span>
              <input id="precio" type="text" className="w-42 border-2 border-blue-900 rounded-lg pl-8" />
            </div>
          </div>
        </section>

        <section className="flex justify-center">
          <div className="flex-col flex pt-2">
            <label htmlFor="descripcion" className="font-bold border-b-2 border-blue-900 w-40">Descripcion</label>
            <textarea id="descripcion" className="border-2 border-blue-900 w-96 h-40 rounded-lg mt-2 p-2"></textarea>

            <label htmlFor="image" className="pt-4 font-bold border-b-2 border-blue-900 w-48">Subir foto del vehiculo</label>
            <input type="file" id="image" className="font-bold mt-2" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default RegistroVehiculo;
