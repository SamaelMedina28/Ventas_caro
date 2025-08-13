import HeroSection from "./components/sections/HeroSection";
import NavHeader from "./components/sections/Navbar";
import Productos from "./components/sections/Productos";
import CallToAction from "./components/CallToAction";
import Servicios from "./components/sections/Servicios";
import Preguntas from "./components/sections/Preguntas";

export default function App() {
  return (
    <div>
      <NavHeader/>
      <HeroSection/>
      <Productos/>
      <Servicios/>
      <CallToAction/>
      <Preguntas/>
    </div>
  )
}