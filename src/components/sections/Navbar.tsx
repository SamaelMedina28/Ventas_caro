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

function NavHeader() {
  const navItems = [
    { name: "Productos", link: "#products" },
    { name: "Servicios", link: "#services" },
    { name: "Preguntas", link: "#questions" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            className="gap-6"
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              variant="secondary"
              className="bg-purple-200 text-purple-700 hover:bg-purple-300 transition-all duration-300 rounded-full shadow-sm"
            >
              Contacto
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader className="">
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="p-6 shadow-lg"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative duration-300 text-md font-medium py-2 hover:text-purple-500 transition-colors"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-purple-200 text-purple-700 hover:bg-purple-300 transition-all duration-300 rounded-full shadow-sm"
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
export default NavHeader;
