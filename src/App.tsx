import HeroSection from "./components/sections/HeroSection";
import NavHeader from "./components/sections/Navbar";
import Productos from "./components/sections/Productos";

export default function App() {
  return (
    <div>
      <NavHeader/>
      <HeroSection/>
      <Productos/>
    </div>
  )
}