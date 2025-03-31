import { useParams, useNavigate } from "react-router-dom";
import { devicesData } from "../data/devicesData";

export default function DevicePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const device = devicesData.find((d) => d.id === Number(id));

  if (!device) {
    return (
      <div className="text-white p-6 text-center">
        <h2 className="text-2xl font-bold">המכשיר לא נמצא</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 rounded-lg"
        >
          חזור אחורה
        </button>
      </div>
    );
  }

  // קישור לדוח PDF דמיוני – נניח שכל מכשיר מקבל PDF בשם לפי ID
  const pdfUrl = `/reports/device-${device.id}.pdf`;

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto bg-[#121826] rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={device.image}
            alt={device.name}
            className="w-64 h-64 object-contain rounded-xl border border-blue-500"
          />

          <div className="flex-1 text-right">
            <h1 className="text-3xl font-bold text-blue-400 mb-2">{device.name}</h1>
            <p className="text-lg text-gray-300 mb-1">יצרן: {device.manufacturer}</p>
            {device.frequency && (
              <p className="text-lg text-gray-300 mb-1">תדר פעולה: {device.frequency}</p>
            )}

            <span
              className={`inline-block text-sm font-bold px-3 py-1 rounded-full mt-2 ${
                device.status === "פעיל"
                  ? "bg-green-600"
                  : device.status === "ממתין לבדיקה"
                  ? "bg-yellow-600"
                  : "bg-gray-600"
              }`}
            >
              {device.status}
            </span>

            <p className="mt-6 text-gray-400 leading-relaxed">
              מכשיר זה נבדק במסגרת המחקר ונמצא בקטגוריית "{device.category}".
              ניתן לעיין בתיעוד נוסף על אופן פעולתו והשימוש בו בשטח.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => navigate(-1)}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white"
              >
                חזור לקטגוריה
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl text-white"
              >
                הצג דוח PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
