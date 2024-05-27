import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingNav from "../components/FloatingNav";
import background from "../assets/background.svg";

export default function BodyLayout() {
  return (
    <div className="relative flex flex-col min-h-screen h-screen">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-fixed -z-10 min-h-svh"
        style={{
          backgroundImage: `url("${background}")`,
        }}
      />
      <Header />
      <main className="relative flex-grow">
        <Outlet />
        <FloatingNav />
      </main>
      <Footer />
    </div>
  );
}
