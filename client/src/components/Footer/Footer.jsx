import { Link } from "react-router-dom";
import FooterSiteNav from "./FooterSiteNav";
import FooterSocNav from "./FooterSocNav";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <FooterSiteNav />
        <FooterSocNav />
        <p className="mt-10 text-center text-xs leading-5 text-gray-300">
          &copy; {dayjs().format("YYYY")} Zach of All Trades, LLC. All rights
          reserved.
        </p>
        <p className="mt-2 text-center text-sm font-semibold leading-5">
          <Link to="/privacy" className=" text-blue-400 hover:text-blue-500">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
