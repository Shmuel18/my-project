import { Link } from "react-router-dom";
import { FaSatellite, FaRobot, FaBroadcastTower, FaTabletAlt } from "react-icons/fa";

const categories = [
  { label: "לווינים", icon: <FaSatellite /> },
  { label: "רחפנים", icon: <FaRobot /> },
  { label: "מכשירי קשר", icon: <FaBroadcastTower /> },
  { label: "מערכות הפעלה", icon: <FaTabletAlt /> },
];

const Categories = () => {
  return (
    <section className="py-10 px-4 text-center bg-[#0b0f1a]" dir="rtl">
      <h2 className="text-4xl font-bold text-white mb-12">קטגוריות</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <Link to={`/category/${cat.label}`} key={idx}>
            <div
              className="group border border-blue-600 hover:border-blue-400 hover:bg-blue-800 p-6 rounded-2xl bg-blue-950 text-white flex flex-col items-center transition-transform duration-300 transform hover:scale-105 shadow-xl"
            >
              <div className="text-5xl mb-4 text-blue-400 group-hover:text-white transition-colors">
                {cat.icon}
              </div>
              <p className="text-lg font-semibold tracking-tight">
                {cat.label}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
