import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const categories = ["הכול", "לוויינים", "רחפנים", "רדיו", "ציוד שטח"];

const FiltersBar = () => {
  const [activeCategory, setActiveCategory] = useState("הכול");
  const [search, setSearch] = useState("");

  return (
    <div className="bg-orange-300 p-4 flex justify-between items-center" dir="rtl">
      {/* כפתורי קטגוריה */}
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded font-semibold transition 
              ${activeCategory === cat ? "bg-orange-200" : "bg-white hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* שורת חיפוש */}
      <div className="flex items-center bg-white px-2 rounded">
        <input
          type="text"
          placeholder="חפש..."
          className="outline-none p-1 bg-transparent text-right"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-gray-700 cursor-pointer hover:text-black" />
      </div>
    </div>
  );
};

export default FiltersBar;