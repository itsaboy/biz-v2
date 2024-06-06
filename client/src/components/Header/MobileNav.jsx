import { useContext } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { siteNav } from "../../data/navigation";
import logo from "../../assets/logo.svg";
import { NavContext } from "../../context/NavContext.jsx";

export default function MobileNav({ mobileMenuOpen, setMobileMenuOpen }) {
  const { currentPage } = useContext(NavContext);

  return (
    <Dialog
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 sm:border-l border-slate-600">
        <div className="flex items-center justify-between">
          <div className="-m-1.5 p-1.5">
            <span className="sr-only">Zach of All Trades</span>
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Zach of All Trades logo"
            />
          </div>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-slate-200 hover:text-slate-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-slate-500/10">
            <div className="space-y-2 py-6">
              {siteNav.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-200 hover:text-slate-950 hover:bg-slate-200 ${
                    currentPage === item.name && "bg-indigo-400 hover:bg-indigo-400 text-slate-950 hover:text-slate-950 hover:cursor-default"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
