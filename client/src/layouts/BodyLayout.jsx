import { Outlet } from "react-router-dom";
import BGAnim from "../components/BGAnim";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// import FloatingNav from "../components/FloatingNav";

export default function BodyLayout() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <BGAnim />
      <Header />
      <main className="relative flex-grow">
        <Outlet />
        {/* <FloatingNav /> */}
      </main>
      <Footer />
    </div>
  );
}
