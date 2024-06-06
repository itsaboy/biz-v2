import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import ButtonOne from "../components/ButtonOne";
import { NavContext } from "../context/NavContext";

export default function Error() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Error");
  }, [setCurrentPage]);

  return (
    <div className="h-full flex flex-col pt-40 sm:pt-64">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-400 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-300">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/pricing">
            <ButtonOne
              text={"Go Home"}
              icon={<HomeIcon className="h-6 w-auto" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
