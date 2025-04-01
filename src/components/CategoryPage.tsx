import { JSX, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { devicesData } from "../data/devicesData";
import { FaSatellite, FaRobot, FaBroadcastTower, FaTabletAlt } from "react-icons/fa";

const categoryIcons: Record<string, JSX.Element> = {
  לווינים: <FaSatellite />, 
  רחפנים: <FaRobot />, 
  "מכשירי קשר": <FaBroadcastTower />, 
  "מערכות הפעלה": <FaTabletAlt />,
};

export default function CategoryPage() {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDevices = devicesData.filter(
    (device) =>
      device.category === name &&
      device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-black dark:text-white transition-colors duration-300 px-6 py-12"
      style={{ backgroundImage: "url('/bg-tech-wave.jpg')" }}
      dir="rtl"
    >
      {/* שכבת כהות מופיעה רק במצב לילה */}
      <div className="absolute inset-0 z-0 transition-opacity duration-300">
        <div className="w-full h-full dark:bg-black dark:bg-opacity-60" />
      </div>

      <div className="relative z-10">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 gap-6">
          <div className="flex items-center gap-3">
            <span className="text-4xl text-blue-400">{categoryIcons[name!]}</span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-blue-700 dark:text-blue-300 drop-shadow-md">
              {name}
            </h1>
          </div>

          <input
            type="text"
            placeholder="🔍 חפש מכשיר לפי שם או תדר"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm bg-white/90 dark:bg-[#1a1f2e] backdrop-blur-md px-4 py-2 rounded-xl border border-blue-600 placeholder-gray-500 dark:placeholder-gray-400 text-black dark:text-white font-semibold"
          />
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredDevices.map((device) => (
            <div
              key={device.id}
              className="bg-white/70 backdrop-blur-md dark:bg-[#121826] text-black dark:text-white rounded-2xl border border-blue-600 shadow-xl hover:shadow-2xl p-4 flex flex-col items-center text-center cursor-pointer transition duration-300 hover:scale-105"
            >
              <img
                src={device.image}
                alt={device.name}
                className="w-32 h-32 mb-4 rounded-lg object-contain"
              />
              <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">
                {device.name}
              </h2>
              {device.frequency && (
                <p className="text-base text-black dark:text-gray-300">
                  תדר: {device.frequency}
                </p>
              )}
              <p className="text-base text-black dark:text-gray-300 mb-2">
                {device.manufacturer}
              </p>

              <span
                className={`text-sm px-3 py-1 rounded-full mb-3 font-bold ${
                  device.status === "פעיל"
                    ? "bg-green-500"
                    : device.status === "ממתין לבדיקה"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              >
                {device.status}
              </span>

              <button
                onClick={() => navigate(`/device/${device.id}`)}
                className="mt-auto bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl transition duration-200"
              >
                פרטים נוספים
              </button>
            </div>
          ))}
        </div>

        {filteredDevices.length === 0 && (
          <div className="text-center mt-10 text-gray-600 dark:text-gray-400">
            לא נמצאו מכשירים התואמים את החיפוש.
          </div>
        )}
      </div>
    </div>
  );
}
