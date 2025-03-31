import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import WaveDivider from "./components/WaveDivider";

function App() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <Hero />
      <WaveDivider/>
      <Categories />
    </div>
  );
}

export default App;
