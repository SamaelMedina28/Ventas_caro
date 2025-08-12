import HeroSection from "./components/sections/HeroSection";
import NavHeader from "./components/sections/Navbar";
import Productos from "./components/sections/Productos";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <NavHeader/>
      <HeroSection/>
      <Productos/>
    </div>
  )
}