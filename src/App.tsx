"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

function App() {
  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full font-[Poppins]">
      <Navbar className="bg-pink-100/80 backdrop-blur-md shadow-md border-b border-pink-200">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo className="text-pink-500 font-bold text-lg" />
          <NavItems
            items={navItems}
            className="gap-6 text-pink-600 hover:text-pink-800 transition-colors duration-300"
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className="bg-purple-200 text-purple-700 hover:bg-purple-300 transition-all duration-300 rounded-full shadow-sm"
            >
              Login
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="bg-pink-300 text-white hover:bg-pink-400 transition-all duration-300 rounded-full shadow-sm"
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="">
            <NavbarLogo className="text-pink-500 font-bold text-lg" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-pink-50/90 backdrop-blur-md p-6 rounded-xl shadow-lg"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-pink-700 hover:text-pink-900 transition-colors duration-300 text-lg"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full bg-pink-300 hover:bg-pink-400 text-white transition-all duration-300 rounded-full shadow-sm"
              >
                Contacto
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
export default App;
