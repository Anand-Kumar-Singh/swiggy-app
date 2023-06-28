import { IMG_CDN_URL } from "./config";

const FoodItem = ({
  imageId,
  name,
  description,
  price,
}) => {
  return (
    <>
      <div className="w-60 m-5 shadow-md p-3 z-0 transition ease-in-out hover:scale-110 duration-500">
        <div className="">
          <img src={IMG_CDN_URL + imageId} />
        </div>
        <p className="font-semibold text-xl mt-2 ">{name}</p>
        <p className="text-sm">{description}</p>

        <p className="">Rupee - {price/100}</p>
      </div>
    </>
  );
};

export default FoodItem;
