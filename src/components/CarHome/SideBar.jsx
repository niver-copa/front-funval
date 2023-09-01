const optionData = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan", "BMW"];

const SideBar = () => {
  return (
    <div className="hidden md:w-[20%] h-screen md:flex justify-center  bg-[#f9f9f9] shadow-md">
      <form className="w-[90%] flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Marca</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese la marca"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Modelo</span>
          <select
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
          >
            {optionData.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Precio Mínimo</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el precio mínimo"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Precio Máximo</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el precio máximo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-zinc-600 font-semibold">Año</span>
          <input
            className="w-[100%] h-10 rounded-sm px-2 border border-zinc-400"
            name="marca"
            type="text"
            placeholder="Ingrese el año"
          />
        </div>
      </form>
    </div>
  );
};

export default SideBar;
