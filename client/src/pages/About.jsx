import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/AboutPage/HeroSection";
import TechSection from "../components/AboutPage/TechSection";
import AISection from "../components/AboutPage/AISection";
import { NavContext } from "../context/NavContext";

export default function About() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("About");
  }, [setCurrentPage]);

  return (
    <>
      <Helmet>
        <title>About | Zach of All Trades | Zach of All Trades, LLC</title>
        <meta
          name="description"
          content="The digital landscape is forever
              changing, and staying at the forefront of emerging trends and
              technologies is not just a professional obligation—it's a personal
              passion."
        />
        {/* change for production */}
        <link rel="canonical" href="https://zach-of-all-trades.link/about" />
      </Helmet>
      <div className="bg-transparent">
        <div className="isolate">
          <HeroSection />
          <TechSection />
          <AISection />
        </div>
      </div>
    </>
  );
}
