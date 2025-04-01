import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md flex justify-between items-center" dir="rtl">
      {/* לוגו מימין */}
      <div className="flex gap-4 items-center text-xl">
        <Link to="/" className="hover:scale-110 transition-transform cursor-pointer">
          <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
        </Link>

        <button className="hover:scale-110 transition-transform cursor-pointer">
          <FaPlus />
        </button>
      </div>

      {/* כותרת באמצע */}
      <h1 className="text-2xl font-bold text-blue-400 tracking-widest">
        תדר
      </h1>

      {/* רווח שמאזן את הלייאאוט */}
      <div className="w-16"></div>
    </header>
  );
};

export default Header;
