import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Menu = () => {
  const [resmenu, setersmenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9753&lng=77.591&restaurantId=347868&submitAction=ENTER",
      );

      console.log("Status:", response.status);
      console.log("OK:", response.ok);

      const text = await response.text();

      console.log("Length:", text.length);
      console.log("Body:", text);
    } catch (err) {
      console.error(err);
    }
  };

  if (resmenu === null) return <Shimmer />;
  return (
    <div className="menu-card">
      <h1>name</h1>
      <div className="menu-info">
        <h3>name</h3>

        <p className="menu-price">price</p>

        <p className="menu-rating">
          ⭐ ratings?.aggregatedRating?.rating || "4.0"
        </p>

        <p className="menu-description">description</p>
      </div>

      <div className="menu-image-container">
        <img className="menu-image" src="hjm" alt={name} />

        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
};

export default Menu;
