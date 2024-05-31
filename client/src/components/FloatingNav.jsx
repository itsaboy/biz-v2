import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { siteNav } from "../data/navigation";
import { NavContext } from "../context/NavContext";

export default function FloatingNav() {
  const [isSticky, setIsSticky] = useState(false);
  const navigate = useNavigate();
  const { currentPage } = useContext(NavContext);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      if (window.scrollY > headerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event, to) => {
    event.preventDefault();
    window.scrollTo({ top: 0 });
    navigate(to);
  };

  return (
    <>
      {currentPage === "Error" || currentPage === "Privacy" ? null : (
        <nav
          className={`bg-gray-50 text-gray-950 shadow-lg flex items-center justify-evenly py-4 sm:rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-b sm:border border-blue-950 ${
            isSticky
              ? "fixed top-0 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 sm:px-4 w-full sm:w-auto"
              : "hidden"
          }`}
        >
          <div className="flex gap-6 sm:gap-12">
            {siteNav.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={(event) => handleClick(event, link.to)}
                className={`text-xs sm:text-sm w-12 hover:text-blue-600 transition-colors flex flex-col gap-1 items-center ${
                  currentPage === link.name && "hidden"
                }`}
              >
                <span className="h-6 w-6">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
