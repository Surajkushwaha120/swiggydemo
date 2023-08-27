import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";


const RestaurantMenu = () => {
   
  const  {resId}  =  useParams();




 const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.4254236&lng=72.8156715&restaurantId=" + resId
    );

    const json = await data.json();
    const restaurantMenuList = json["data"]["cards"][0]["card"]["card"]["info"];
    console.log(restaurantMenuList);
    setRestaurant(restaurantMenuList)
  }
  

  return  (
    <div>
      <div className="menu-items">
      <h1>hii this restaurant id:{resId}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL+ restaurant.cloudinaryImageId} />
      <h3>{restaurant.area}</h3>
      <h3>{restaurant.city}</h3>
      <h3>{restaurant.avgRating} Stars</h3>
      <h3>{restaurant.costForTwoMessage}</h3>
      </div>
      <div> 
        {/* {console.log(restaurant.menu.items)} */}
      </div>
    </div>
  );
};

export default RestaurantMenu;
