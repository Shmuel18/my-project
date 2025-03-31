import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { devicesData } from "../data/devicesData";

export default function CategoryPage() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredDevices = devicesData.filter(
    (device) =>
      device.category === name &&
      device.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white p-6">
      {/* כותרת */}
      <h1 className="text-3xl font-bold mb-2 text-right">{name}</h1>

      {/* תיאור קצר */}
      <p className="text-gray-400 mb-6 text-right">
        כאן תוכל לצפות בפרטי המכשירים של קטגוריית <span className="font-bold text-blue-400">{name}</span>. ניתן לחפש, לסנן, ולצפות בפרטים.
      </p>

      {/* חיפוש */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="חפש מכשיר לפי שם או תדר..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-xl bg-[#121826] text-white border border-blue-500 placeholder-gray-400 text-right"
        />
      </div>

      {/* כרטיסים */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDevices.map((device) => (
          <div
            key={device.id}
            className="bg-[#121826] border border-blue-500 rounded-2xl p-4 flex flex-col items-center text-center"
          >
            <img
              src={device.image}
              alt={device.name}
              className="w-32 h-32 object-contain mb-4 rounded-xl"
            />
            <h2 className="text-xl font-semibold">{device.name}</h2>
            {device.frequency && (
              <p className="text-sm text-gray-400">{device.frequency}</p>
            )}
            <p className="text-sm text-gray-400 mb-2">{device.manufacturer}</p>

            <span
              className={`text-sm font-bold px-3 py-1 rounded-full mb-4 ${
                device.status === "פעיל"
                  ? "bg-green-600"
                  : device.status === "ממתין לבדיקה"
                  ? "bg-yellow-600"
                  : "bg-gray-600"
              }`}
            >
              {device.status}
            </span>

            <button
              onClick={() => navigate(`/device/${device.id}`)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm"
            >
              לפרטים נוספים
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
