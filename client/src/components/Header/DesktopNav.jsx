import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { siteNav } from "../../data/navigation";
import logo from "../../assets/logo.svg";

export default function DesktopNav({ setMobileMenuOpen }) {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="-m-1.5 p-1.5">
        <span className="sr-only">Zach of All Trades</span>
        <img
          className="h-8 w-auto"
          src={logo}
          alt=""
        />
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {siteNav.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            className="text-sm font-semibold leading-6 text-gray-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
