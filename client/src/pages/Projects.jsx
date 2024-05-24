import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import ProjectsSVG from "../components/ProjectsPage/ProjectsSVG";
import ProjectsCard from "../components/ProjectsPage/ProjectsCard";
import { NavContext } from "../context/NavContext";
import styles from "../bubble.module.css";

export default function Projects() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Projects");
  }, [setCurrentPage]);

  return (
    <>
      <Helmet>
        <title>Projects | Zach of All Trades | Zach of All Trades, LLC</title>
        <meta
          name="description"
          content="This portfolio is a curated showcase of ideas brought to life - a
              blend of creativity, technical prowess, and innovative solutions."
        />
        {/* change for production */}
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="relative isolate py-24 sm:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <ProjectsSVG />
            <h2 className="mt-10 text-4xl font-bold tracking-tight text-blue-200 sm:text-6xl hover:cursor-default">
              {"Personal Projects".split("").map((child, idx) => (
                <span className={styles.hoverText} key={idx}>
                  {child}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-200">
              This portfolio is a curated showcase of ideas brought to life - a
              blend of creativity, technical prowess, and innovative solutions.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <ProjectsCard />
          </div>
        </div>
      </div>
    </>
  );
}
