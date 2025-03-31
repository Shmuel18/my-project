const Hero = () => {
    return (
      <section className="bg-gray-900 text-white text-center py-16 px-4" dir="rtl">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-white">
          תדר
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-4 max-w-2xl mx-auto">
        כל התדרים. כל הנתונים. במקום אחד.


        </p>
  
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">
          🔍 חיפוש תדרים
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-500 transition">
          📅 גישה לדו"חות
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;
  