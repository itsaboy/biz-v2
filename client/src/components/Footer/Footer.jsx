import { Link } from "react-router-dom";
import FooterSiteNav from "./FooterSiteNav";
import FooterSocNav from "./FooterSocNav";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <FooterSiteNav />
        <FooterSocNav />
        <p className="mt-10 text-center text-xs leading-5 text-slate-300">
          &copy; {dayjs().format("YYYY")} Zach of All Trades, LLC. All rights
          reserved.
        </p>
        <p className="mt-2 text-center text-sm font-semibold leading-5">
          <Link to="/privacy" className=" text-indigo-400 hover:text-indigo-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
