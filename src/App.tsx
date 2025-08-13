import HeroSection from "./components/sections/HeroSection";
import NavHeader from "./components/sections/Navbar";
import Productos from "./components/sections/Productos";
import CallToAction from "./components/CallToAction";

export default function App() {
  return (
    <div>
      <NavHeader/>
      <HeroSection/>
      <Productos/>
      <CallToAction/>
    </div>
  )
}