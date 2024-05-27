import FooterSiteNav from "./FooterSiteNav";
import FooterSocNav from "./FooterSocNav";
import dayjs from "dayjs";

export default function Footer() {
  return (
    <footer className="bg-gray-950">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <FooterSiteNav />
        <FooterSocNav />
        <p className="mt-10 text-center text-xs leading-5 text-gray-300">
          &copy; {dayjs().format("YYYY")} Zach of All Trades, LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
