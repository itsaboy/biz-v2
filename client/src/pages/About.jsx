import { useEffect, useContext } from "react";
import HeroSection from "../components/AboutPage/HeroSection";
import TechSection from "../components/AboutPage/TechSection";
import AISection from "../components/AboutPage/AISection";
import HelmetTags from "../components/HelmetTags";
import { NavContext } from "../context/NavContext";

export default function About() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("About");
  }, [setCurrentPage]);

  return (
    <>
      <HelmetTags />
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
