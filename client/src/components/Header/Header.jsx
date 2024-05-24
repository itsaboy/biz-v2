import { useState } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-950 border-b border-gray-600">
      <DesktopNav setMobileMenuOpen={setMobileMenuOpen} />
      <MobileNav
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
