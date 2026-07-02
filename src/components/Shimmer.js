const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="w-72 rounded-xl overflow-hidden border border-gray-200"
        >
          <div className="h-44 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

          <div className="p-4 space-y-3">
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

            <div className="h-4 w-full bg-gray-200 rounded"></div>

            <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

            <div className="flex justify-between pt-2">
              <div className="h-4 w-14 bg-gray-300 rounded"></div>

              <div className="h-4 w-10 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
