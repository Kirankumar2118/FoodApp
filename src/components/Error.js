import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-lg w-full">
        <div className="text-7xl mb-4">⚠️</div>

        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Oops! Something went wrong.
        </h1>

        <h2 className="text-6xl font-extrabold text-orange-500 mb-2">
          {err?.status || "404"}
        </h2>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          {err?.statusText || "Page Not Found"}
        </h3>

        <p className="text-gray-500 mb-6">
          The page you are looking for does not exist or an unexpected error
          occurred.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
