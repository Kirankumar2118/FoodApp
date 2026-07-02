import { cdn } from "../../utils/constant";

const Card = (props) => {
  const { resdata } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resdata?.info;

  return (
    <div className="w-72 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105">
      <img
        className="w-full h-44 object-cover"
        src={cdn + resdata.info.cloudinaryImageId}
        alt={name}
      />

      <div className="p-4">
        <h3 className="text-lg font-bold truncate">{name}</h3>

        <h4 className="text-gray-500 text-sm mt-1 line-clamp-2">
          {cuisines.join(", ")}
        </h4>

        <div className="flex justify-between items-center mt-3">
          <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
            ⭐ {avgRating}
          </span>

          <span className="text-gray-600 text-sm">
            {sla?.deliveryTime} mins
          </span>
        </div>

        <h3 className="mt-3 font-semibold text-gray-800">{costForTwo}</h3>
      </div>
    </div>
  );
};

export const promotedlabel = (Card) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 z-10 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
          OPEN
        </span>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
