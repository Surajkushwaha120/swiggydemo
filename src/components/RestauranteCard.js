import React from 'react'
import {IMG_CDN_URL } from '../contants';
const RestauranteCard = ({name,cloudinaryImageId,cuisines,avgRating,locality
}) => {
    return (    
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3 maxlength="20"> {cuisines.join(" , ")}</h3>
        <h4>Rating {avgRating}*</h4>
      </div> 
    );
  }
  
export default RestauranteCard