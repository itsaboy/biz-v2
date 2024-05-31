import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import BodyLayout from "./layouts/BodyLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Error from "./pages/Error";
import { NavContextProvider } from "./context/NavContext";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<BodyLayout />}>
      <Route index element={<Home />} />,
      <Route index path="/about" element={<About />} />,
      <Route index path="/projects" element={<Projects />} />,
      <Route index path="/pricing" element={<Pricing />} />,
      <Route index path="/contact" element={<Contact />} />,
      <Route index path="/privacy" element={<PrivacyPolicy />} />,
      <Route path="*" element={<Error />} />,
    </Route>,
  ])
);

function App() {
  return (
    <NavContextProvider>
      <RouterProvider router={router} />
    </NavContextProvider>
  );
}

export default App;
