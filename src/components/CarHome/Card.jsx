import { Link } from "react-router-dom";

const Card = ({ title, img, price, link }) => {
  return (
    <Link
      to={`/cardealer/${link}`}
      className="w-[90%] md:w-[30%] h-[300px] bg-white rounded-sm shadow-md border"
    >
      <div>
        <span className="font-semibold text-zinc-500">
          <span>{title} </span>
        </span>
      </div>
      <div className="flex justify-center">
        <img className="min-w-[250px] h-[250px]" src={`${img}`} alt="car-img" />
      </div>
      <div className="w-full flex justify-end px-2">
        <span className="font-semibold text-zinc-600">{price}</span>
      </div>
    </Link>
  );
};

export default Card;
