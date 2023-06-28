import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   console.log("useEffect()");
  // });

  // console.log("render()");
  // Empty dependency array - once after render
  // dep array [searchText] = once after initial render + everytime after render (searchText render)

  useEffect(() => {
    // API Call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0330488&lng=73.0296625&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

  // Conditional Rendering
  // If restaurant is empty => Shimmer UI
  // if retaurant has data => actual data UI

  //not render component (Earyly Return)
  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0) return <h1>No restaurant found!!</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="m-5">
          <input
            type="text"
            className="bg-slate-100 p-2 rounded-md "
            placeholder="Search your Restaurant"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="ml-2 bg-slate-500 text-white p-1.5 rounded-md"
            onClick={() => {
              // need to filter the data
              const data = filterData(searchInput, allRestaurants);
              // update the state - restaurants
              setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap">
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
