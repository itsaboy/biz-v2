import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingNav from "../components/FloatingNav";
import background from "../assets/background.svg";

export default function BodyLayout() {
  return (
    <div className="relative flex flex-col min-h-screen h-full">
      <Header />
      <main className="relative flex-grow">
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover bg-fixed -z-10 min-h-full h-full flex"
          style={{
            backgroundImage: `url("${background}")`,
          }}
        />
        <Outlet />
        <FloatingNav />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-8 bg-gradient-to-t from-slate-900 sm:h-12" />
      </main>
      <Footer />
    </div>
  );
}
