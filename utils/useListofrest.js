import { useEffect, useState } from "react";

const useRestaurantList = () => {
  const [listofrestaurent, setlistofrestaurent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.6244807&page_type=DESKTOP_WEB_LISTING",
      );

      const json = await data.json();
      console.log(json);

      const restaurants =
        json?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      console.log(restaurants);
      setlistofrestaurent(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  return listofrestaurent;
};

export default useRestaurantList;
