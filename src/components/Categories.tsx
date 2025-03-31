import { FaSatellite, FaRobot, FaBroadcastTower, FaTabletAlt } from "react-icons/fa";

const categories = [
  { label: "לווינים", icon: <FaSatellite /> },
  { label: "רחפנים", icon: <FaRobot /> },
  { label: "מכשירי קשר", icon: <FaBroadcastTower /> },
  { label: "מערכות הפעלה", icon: <FaTabletAlt /> },
];

const Categories = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-900" dir="rtl">
      <h2 className="text-3xl font-bold text-white mb-8">קטגוריות</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border-2 border-blue-500 hover:border-red-500 p-6 rounded-lg bg-gray-800 text-white flex flex-col items-center transition"
          >
            <div className="text-4xl mb-4 text-blue-400">{cat.icon}</div>
            <p className="text-lg font-semibold">{cat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
