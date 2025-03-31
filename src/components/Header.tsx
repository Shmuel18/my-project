import { FaHome, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md flex justify-between items-center" dir="rtl">
      {/* אייקונים מימין */}
      <div className="flex gap-4 items-center text-xl">
        <button className="hover:scale-110 transition-transform cursor-pointer">
          <FaHome />
        </button>
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
