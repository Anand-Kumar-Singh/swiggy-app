import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
}) => {
  return (
    <>
      <div className="w-60 m-5 h-72 shadow-md p-3 z-0 transition ease-in-out hover:scale-110 duration-500">
        <div className="">
          <img src={IMG_CDN_URL + cloudinaryImageId} />
        </div>
        <p className="font-semibold text-xl mt-2 ">{name}</p>
        <p className="text-sm h-10">{cuisines.join(", ")}</p>

        <div className="flex  justify-between">
          {avgRating > 4 && (
            <span
              className="bg-green-500
          00 text-white p-1 "
            >
              {avgRating}stars
            </span>
          )}
          {avgRating > 3 && avgRating < 4 && (
            <span
              className="bg-orange-600
          00 text-white p-1"
            >
              {avgRating}stars
            </span>
          )}
          {avgRating < 3 && (
            <span
              className="bg-red-600-600
          00 text-white p-1"
            >
              {avgRating}stars
            </span>
          )}
          <span>{slaString}</span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
