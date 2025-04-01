import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import CategoryPage from "./components/CategoryPage";
import DevicePage from "./components/DevicePage";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
            </>
          }
        />
  <Route path="/category/:name" element={<CategoryPage />} />
  <Route path="/device/:id" element={<DevicePage />} />

</Routes>
    </div>
  );
}


export default App;
