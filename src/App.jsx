import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={() => navigate("/")} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
