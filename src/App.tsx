import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CategoryPage from "./components/CategoryPage";
import DevicePage from "./components/DevicePage";
import About from "./components/About";

function App() {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{
        backgroundImage: "url('/bg-tech-wave.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute inset-0 -z-10" />

      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/device/:id" element={<DevicePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
