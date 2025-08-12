import HeroSection from "./components/sections/HeroSection";
import NavHeader from "./components/sections/Navbar";

type Props = {};

export default function App({}: Props) {
  return (
    <div>
      <NavHeader/>
      <HeroSection/>
    </div>
  )
}