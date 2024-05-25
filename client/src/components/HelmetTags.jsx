import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { NavContext } from "../context/NavContext";

export default function HelmetTags() {
  const { currentPage } = useContext(NavContext);

  return (
    <Helmet>
      {currentPage === "Home" ? (
        <>
          <title>Home | Zach of All Trades | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="From concept to creation, your vision is the blueprint for a
            uniquely crafted website that speaks directly to your audience."
          />
          <link rel="canonical" href="https://zach-of-all-trades.link/" />
        </>
      ) : currentPage === "About" ? (
        <>
          <title>About | Zach of All Trades | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="The digital landscape is forever
            changing, and staying at the forefront of emerging trends and
            technologies is not just a professional obligation—it's a personal
            passion."
          />
          <link rel="canonical" href="https://zach-of-all-trades.link/about" />
        </>
      ) : currentPage === "Projects" ? (
        <>
          <title>Projects | Zach of All Trades | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="This portfolio is a curated showcase of ideas brought to life - a
            blend of creativity, technical prowess, and innovative solutions."
          />
          <link
            rel="canonical"
            href="https://zach-of-all-trades.link/projects"
          />
        </>
      ) : currentPage === "Pricing" ? (
        <>
          <title>Pricing | Zach of All Trades | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="Choosing the right partner for your web development needs is a
            critical decision, and understanding the investment is a big part
            of that choice."
          />
          <link
            rel="canonical"
            href="https://zach-of-all-trades.link/pricing"
          />
        </>
      ) : currentPage === "Contact" ? (
        <>
          <title>Contact | Zach of All Trades | Zach of All Trades, LLC</title>
          <meta
            name="description"
            content="I'm excited to learn about your project and explore how we can
      collaborate to create something truly amazing."
          />
          <link
            rel="canonical"
            href="https://zach-of-all-trades.link/contact"
          />
        </>
      ) : null}
    </Helmet>
  );
}
