import { useParams, useNavigate } from "react-router-dom";
import { devicesData } from "../data/devicesData";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const device = devicesData.find((d) => d.id === Number(id));

  if (!device) {
    return (
      <div
        className="relative min-h-screen text-white text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-tech-wave.jpg')" }}
        dir="rtl"
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-3xl font-bold mb-4">המכשיר לא נמצא</h2>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-lg flex items-center gap-2"
          >
            <FaArrowRight /> חזור אחורה
          </button>
        </div>
      </div>
    );
  }

  const pdfUrl = `/reports/device-${device.id}.pdf`;
  const relatedDevices = devicesData.filter(
    (d) => d.category === device.category && d.id !== device.id
  );

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-black dark:text-white transition-colors duration-300 px-6 py-12"
      style={{ backgroundImage: "url('/bg-tech-wave.jpg')" }}
      dir="rtl"
    >
      <div className="absolute inset-0 z-0 transition-opacity duration-300">
        <div className="w-full h-full dark:bg-black dark:bg-opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-md dark:bg-[#121826] text-black dark:text-white rounded-3xl shadow-2xl p-8 border border-blue-800"
        >
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={device.image}
              alt={device.name}
              className="w-64 h-64 object-contain rounded-2xl border border-blue-600 shadow-md"
            />

            <div className="flex-1 text-right">
              <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 drop-shadow">
                {device.name}
              </h1>
              <div className="space-y-2 text-lg text-black dark:text-gray-200">
                <p>
                  יצרן: <span className="font-semibold text-black dark:text-white">{device.manufacturer}</span>
                </p>
                {device.frequency && (
                  <p>
                    תדר פעולה: <span className="font-semibold text-black dark:text-white">{device.frequency}</span>
                  </p>
                )}
              </div>

              <span
                className={`inline-block text-sm font-bold px-4 py-1 rounded-full mt-4 ${
                  device.status === "פעיל"
                    ? "bg-green-500"
                    : device.status === "ממתין לבדיקה"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              >
                {device.status}
              </span>

              <p className="mt-6 text-base text-black dark:text-gray-200 leading-relaxed">
                מכשיר זה נבדק במסגרת המחקר ונמצא בקטגוריית <span className="text-blue-700 dark:text-blue-400 font-semibold">"{device.category}"</span>. ניתן לעיין בתיעוד נוסף על אופן פעולתו והשימוש בו בשטח.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  onClick={() => navigate(`/category/${device.category}`)}
                  className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl text-white text-sm flex items-center gap-2"
                >
                  <FaArrowRight /> חזור לקטגוריה
                </button>

                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 px-6 py-2 rounded-xl text-white text-sm flex items-center gap-2"
                >
                  <FaFilePdf /> הצג דוח PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {relatedDevices.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-400 text-right">
              עוד מכשירים בקטגוריית "{device.category}"
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedDevices.map((related) => (
                <motion.div
                  key={related.id}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/70 dark:bg-[#1a1f2e] border border-blue-600 rounded-2xl p-4 text-black dark:text-white text-center shadow-lg"
                >
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-24 h-24 object-contain mx-auto mb-3 rounded-lg"
                  />
                  <h3 className="text-lg font-semibold mb-1">{related.name}</h3>
                  {related.frequency && (
                    <p className="text-sm text-black dark:text-gray-200 mb-2">תדר: {related.frequency}</p>
                  )}
                  <button
                    onClick={() => navigate(`/device/${related.id}`)}
                    className="mt-auto bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm transition"
                  >
                    פרטים נוספים
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}