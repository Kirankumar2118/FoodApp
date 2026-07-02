import { logo } from "../../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import { usercontext } from "../../utils/usecontext";

const Header = () => {
  const [btnval, setbtnval] = useState("Login");
  const status = useOnline();
  const user = useContext(usercontext);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img className="w-20 h-20 object-contain" src={logo} alt="logo" />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">
          <span className="text-xl">{status ? "🟢" : "🔴"}</span>

          <ul className="flex items-center gap-6 font-medium text-gray-700">
            <li>
              <Link to="/" className="hover:text-orange-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-500 transition">
                Contact Us
              </Link>
            </li>

            <li>
              <Link to="/grocery" className="hover:text-orange-500 transition">
                Grocery
              </Link>
            </li>
          </ul>

          <button
            className={`px-5 py-2 rounded-lg text-white font-medium transition ${
              btnval === "Login"
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
            onClick={() => {
              setbtnval(btnval === "Login" ? "Logout" : "Login");
            }}
          >
            {btnval}
          </button>

          <button className="px-5 py-2 rounded-lg text-white font-medium bg-orange-500 hover:bg-orange-600">
            {user.username}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
