import React from "react";

const About = () => {
  return (
    <div
      dir="rtl"
      className="relative min-h-screen text-black dark:text-white flex flex-col items-center py-12 px-4 bg-cover bg-center transition-colors duration-300"
      style={{ backgroundImage: "url('/bg-tech-wave.jpg')" }}
    >
      {/* שכבת כהות מופיעה רק במצב לילה */}
      <div className="absolute inset-0 z-0 transition-opacity duration-300">
        <div className="w-full h-full dark:bg-black dark:bg-opacity-60" />
      </div>

      <div className="relative z-10 max-w-3xl shadow-lg rounded-xl p-8 bg-white/80 dark:bg-transparent backdrop-blur-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700 dark:text-blue-300 drop-shadow-md">
          אודות האתר "תדר"
        </h1>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          אתר "תדר" נוצר על מנת לספק מידע עדכני ומפורט על מגוון מכשירים וציוד הפועלים בתחום הספקטרום האלקטרומגנטי, לרבות מכשירי קשר, מערכות תקשורת, לוויינים, רחפנים ועוד.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
          מטרת האתר היא לסייע לחוקרים ולאנשי מקצוע לאתר במהירות וביעילות מידע טכני מדויק, דוחות מפורטים ופרטי תדרים שונים, כדי לשפר את איכות העבודה והמחקר שלהם.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300">
          האתר ממשיך להתעדכן באופן שוטף, ונשמח לקבל כל משוב, הצעה או מידע נוסף שיסייע לנו לשפר את החוויה.
        </p>
      </div>
    </div>
  );
};

export default About;