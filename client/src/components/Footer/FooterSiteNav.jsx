import { Link } from "react-router-dom";
import { siteNav } from "../../data/navigation.jsx";

export default function FooterSiteNav() {
  return (
    <nav
      className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
      aria-label="Footer"
    >
      {siteNav.map((item) => (
        <div key={item.name} className="pb-6">
          <Link
            to={item.to}
            className="text-sm leading-6 text-slate-400 hover:text-slate-300"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
