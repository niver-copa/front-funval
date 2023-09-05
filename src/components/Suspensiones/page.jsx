import { useState, useEffect } from "react"
import axios from "axios";

export default function Suspensiones() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [suspensiones, setSuspensiones] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/suspensiones')
      .then((response) => {
        setSuspensiones(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        <main className="container mx-auto py-8">
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 p-4">
              <label htmlFor="search" className="block text-lg  mb-2 font-medium">Search:</label>
              <input id="search" type="text" className="w-full px-4 py-2 border border-blue-900 rounded-md" />
            </div>
            <a
              
              href="/suspensiones/crear"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-12 text-center dark:bg-blue-900 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center items-center"
              type="button"
            >
              Agregar Suspension
            </a>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mt-4">Nuestros Tipos de  Suspensiones</h1>
            <table className="w-full md:w-2/3 table-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="py-4 px-6 text-start">ID</th>
                  <th className="py-4 px-6 text-start">Tipo de Suspension</th>
                </tr>
              </thead>
              <tbody>
                {suspensiones.map((sus) => (
                  <tr key={sus.id} className="border-b border-gray-300">
                      <td className="py-4 px-6">{sus.id}</td>
                      <td className="py-4 px-6">{sus.tipo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

    </>
  )
}
