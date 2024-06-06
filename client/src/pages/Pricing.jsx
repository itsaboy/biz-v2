import { useEffect, useContext } from "react";
import PricingSVG from "../components/PricingPage/PricingSVG.jsx";
import PricingGradient from "../components/PricingPage/PricingGradient.jsx";
import PricingCards from "../components/PricingPage/PricingCards.jsx";
import MaintainCards from "../components/PricingPage/MaintainCards.jsx";
import PricingCustom from "../components/PricingPage/PricingCustom.jsx";
import HelmetTags from "../components/HelmetTags";
import { NavContext } from "../context/NavContext";
import styles from "../bubble.module.css";

export default function Pricing() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Pricing");
  }, [setCurrentPage]);

  return (
    <>
      <HelmetTags />
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-96 pt-4 sm:text-center sm:pt-40 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <PricingSVG />
            <h2 className="font-custom mt-10 text-4xl font-bold tracking-tight text-indigo-200 sm:text-6xl hover:cursor-default">
              {"The right price for you.".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h2>
          </div>
          <div className="relative mt-6">
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-200">
              Choosing the right partner for your web development needs is a
              critical decision, and understanding the investment is a big part
              of that choice. This pricing structure is designed to be clear,
              competitive, and adaptable.
            </p>
            <PricingGradient />
          </div>
        </div>
        <div className="flow-root pb-24 sm:pb-32">
          <div className="-mt-80">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div></div>
              <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                <h2 className="mt-4 pb-2 text-center text-2xl font-bold tracking-tight text-indigo-200 sm:text-4xl lg:col-span-2">
                  Development Cost:
                </h2>
                <PricingCards />
                <h2 className="mt-4 pb-2 text-center text-2xl font-bold tracking-tight text-indigo-200 sm:text-4xl lg:col-span-2">
                  Maintenance Cost:
                </h2>
                <MaintainCards />
                <PricingCustom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
