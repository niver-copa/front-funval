import React from 'react';

function Lista() {
  return (
    <div>
      <nav className="bg-blue-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <span className="text-white text-2xl font-bold">icono</span>
            <div className='space-x-4 font-bold pl-16'>
            <a href="#" className="text-white hover:underline">Marcas</a>
            <a href="#" className="text-white hover:underline">Modelos</a>
            <a href="#" className="text-white hover:underline">Age</a>
            <a href="#" className="text-white hover:underline">Categoría</a>
            <a href="#" className="text-white hover:underline">Característica</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto py-8">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 p-4">
            <label htmlFor="search" className="block text-lg  mb-2 font-medium">Search:</label>
            <input id="search" type="text" className="w-full px-4 py-2 border border-blue-900 rounded-md" />
          </div>
        </div>
        <div className="flex justify-center">
          <table className="w-full md:w-2/3 table-auto bg-white shadow-lg rounded-lg overflow-hidden mt-8">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="py-3">Marcas</th>
                <th className="py-3">Modelos</th>
                <th className="py-3">Age</th>
                <th className="py-3">Categoría</th>
                <th className="py-3">Característica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 px-6">Mitsubishi</td>
                <td className="py-4 px-6">Mirage G4</td>
                <td className="py-4 px-6">2024</td>
                <td className="py-4 px-6">Categoría A</td>
                <td className="py-4 px-6">Característica X</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Lista;
