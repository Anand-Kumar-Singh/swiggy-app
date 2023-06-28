import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./Shimmer";
import { MENU_CDN_URL } from "./config";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState({});
  const [restaurant1, setRestaurant1] = useState(null);
  // dynamic url using param
  const params = useParams();
  //   console.log(params);
  const { id } = params;

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(MENU_CDN_URL + id);
    const json = await data.json();
    setRestaurant(json.data.cards[0].card.card.info);
    setRestaurant1(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    // console.log(
    //   json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    //     .itemCards[0].card.info.name
    // );
  }
  // console.log(restaurant.cards[0].card);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="m-5 flex justify-between ">
      {/* <h1>Restaurant id :{id}</h1> */}
      <div className="w-60 h-72 shadow-md p-4">
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h2 className="text-xl font-semibold mt-2">{restaurant.name}</h2>
        <div className="flex justify-between">
          <div>
            <h3>{restaurant.city}</h3>
            <h3>{restaurant.areaName}</h3>
          </div>
          <div className="mt-4">
            {restaurant.avgRating > 4 && (
              <span
                className="bg-green-500
          00 text-white p-1"
              >
                {restaurant.avgRating}stars
              </span>
            )}
            {restaurant.avgRating > 3 && restaurant.avgRating < 4 && (
              <span
                className="bg-orange-600
          00 text-white p-1"
              >
                {restaurant.avgRating}stars
              </span>
            )}
            {restaurant.avgRating < 3 && (
              <span
                className="bg-red-600-600
          00 text-white p-1"
              >
                {restaurant.avgRating}stars
              </span>
            )}
          </div>
        </div>
      </div>
      {/* <div>
        <button
          className="p-2 m-5 bg-green-200"
          onClick={() => handleAddItem()}
        >
          Add Item
        </button>
      </div> */}
      <div className="ml-5">
        <h1 className="bg-slate-400 text-center text-white p-2 font-medium">
          Menu
        </h1>
        <ul className="bg-slate-900 text-white p-2">
          {restaurant1?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} -{" "}
              <button
                className="p-1 bg-slate-400 m-1 rounded-md"
                onClick={() => addFoodItem(item.card.info)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
