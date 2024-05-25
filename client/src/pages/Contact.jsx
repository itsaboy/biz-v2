import { useEffect, useContext } from "react";
import { Helmet } from "react-helmet-async";
import ContactSVG from "../components/ContactPage/ContactSVG";
import ContactInfo from "../components/ContactPage/ContactInfo";
import ContactForm from "../components/ContactPage/ContactForm";
import { NavContext } from "../context/NavContext";

export default function Contact() {
  const { setCurrentPage } = useContext(NavContext);

  useEffect(() => {
    setCurrentPage("Contact");
  }, [setCurrentPage]);

  return (
    <>
      <Helmet>
        <title>Contact | Zach of All Trades | Zach of All Trades, LLC</title>
        <meta
          name="description"
          content="I'm excited to learn about your project and explore how we can
        collaborate to create something truly amazing."
        />
        {/* change for production */}
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <ContactSVG />
          <div className="relative px-6 sm:pb-20 pt-4 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <ContactInfo />
            </div>
          </div>
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
