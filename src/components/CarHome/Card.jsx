import { Link } from "react-router-dom";

const Card = ({ title, img, price, link }) => {
  return (
    <div className="w-[90%] md:w-[30%] h-[300px] bg-white rounded-sm shadow-md border">
      <div>
        <span className="font-semibold text-zinc-500">
          <Link to={link}>{title} </Link>
        </span>
      </div>
      <div className="flex justify-center">
        <img className="min-w-[250px] h-[250px]" src={`${img}`} alt="car-img" />
      </div>
      <div className="w-full flex justify-end px-2">
        <span className="font-semibold text-zinc-600">{price}</span>
      </div>
    </div>
  );
};

export default Card;
