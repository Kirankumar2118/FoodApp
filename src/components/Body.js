import Card, { promotedlabel } from "./Card";
import Shimmer from "./Shimmer";
import { useState, useEffect, useContext } from "react";
import useRestaurantList from "../../utils/useListofrest";
import useOnline from "../../utils/useOnline";
import { usercontext } from "../../utils/usecontext";

const Body = () => {
  const listofrestaurent = useRestaurantList();

  const [filterdrestaurent, setfilterdrestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { username, setname } = useContext(usercontext);

  const ResPromoted = promotedlabel(Card);

  useEffect(() => {
    setfilterdrestaurent(listofrestaurent);
  }, [listofrestaurent]);

  const onlinestatus = useOnline();

  if (!onlinestatus) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-3">
            📡 You're Offline
          </h1>
          <p className="text-gray-600">
            Please check your internet connection and try again.
          </p>
        </div>
      </div>
    );
  }

  if (listofrestaurent.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="px-6 py-4">
      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
            onClick={() => {
              const filteredRestaurant = listofrestaurent.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setfilterdrestaurent(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
          onClick={() => {
            const filter = listofrestaurent.filter(
              (res) => res.info.avgRating > 4.4,
            );

            setfilterdrestaurent(filter);
          }}
        >
          ⭐ Top Restaurants
        </button>
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={(e) => setname(e.target.value)}
          value={username}
        ></input>
      </div>

      {/* Restaurant Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {filterdrestaurent.map((restaurant) =>
          restaurant.info.isOpen ? (
            <ResPromoted key={restaurant.info.id} resdata={restaurant} />
          ) : (
            <Card key={restaurant.info.id} resdata={restaurant} />
          ),
        )}
      </div>
    </div>
  );
};

export default Body;
