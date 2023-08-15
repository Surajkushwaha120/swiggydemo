import React, { useEffect, useState } from "react";
import { restaurantList, restaurantList2 } from "../config";
import RestauranteCard from "./RestauranteCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(setAllRestaurants);

useEffect(() => {
  //API Call
  getRestaurants();

},[]);

async function getRestaurants() {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9766637&lng=77.5712556&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
     
    const json = await data.json();
    // const datalist = json["data"]["cards"];
    const restaurantslist = json["data"]["cards"][2]["card"]["card"]["gridElements"]["infoWithStyle"]["restaurants"];
    console.log("hiii",json);
    setAllRestaurants(restaurantslist); 
    setfilteredRestaurants(restaurantslist);
} 
// json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants

// Condation Rendering 
//if restaurant is empty => shimmuer UI
// if restaurant has data => actual data UI

// Not render Component (Early return)

if(!allRestaurants) return null;

// if(filteredRestaurants?. length === 0)
// return <h1>No Restaurent Match Found ?</h1>


console.log("render");
  
  return allRestaurants?.length === 0 ?(<Shimmer />): (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="resturent-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            // console.log(restaurant.info.name)
            <RestauranteCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
