import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import HomeSVG from "../components/HomePage/HomeSVG";
import HomeTextSection from "../components/HomePage/HomeTextSection";
import HomeCodeSection from "../components/HomePage/HomeCodeSection";
import { NavContext } from "../context/NavContext";

export default function Home() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Home");
  }, [setCurrentPage]);

  return (
    <>
      <Helmet>
        <title>Home | Zach of All Trades | Zach of All Trades, LLC</title>
        <meta
          name="description"
          content="From concept to creation, your vision is the blueprint for a
            uniquely crafted website that speaks directly to your audience."
        />
        {/* change for production */}
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-transparent">
        <div className="relative isolate overflow-hidden bg-transparent">
          <HomeSVG />
          <div className="mx-auto max-w-7xl pb-12 pt-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
            <HomeTextSection />
            <HomeCodeSection />
          </div>
        </div>
      </div>
    </>
  );
}
