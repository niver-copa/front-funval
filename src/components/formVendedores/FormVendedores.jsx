import { useState } from "react";

export default function FormVendedores() {
  const [formData, setFormData] = useState({
    name: "",
    state: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="h-screen">
        <div
          className="w-5/6 h-4/5 flex items-center justify-center content-center flex-col gap-4"
        >
          <label htmlFor="name" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">Nombre</h3>
            <input
              value={formData.name}
              onChange={handleInputChange}
              type="text"
              name="name"
              id="name"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>

          <label htmlFor="state" className="relative">
            <h3 className=" ml-3 bg-white absolute px-2  bottom-8">State</h3>
            <input
              value={formData.state}
              onChange={handleInputChange}
              type="text"
              name="state"
              id="state"
              className="border-2 border-black  rounded-[5px] p-2 focus-visible:border-blue-700 focus-visible:border-2 focus-visible:outline-none"
            />
          </label>

          <button
            type="submit"
            className="border bg-blue-800 text-white w-24 rounded-md"
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
