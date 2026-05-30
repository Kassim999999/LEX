import "./css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import WhatsappButton from "./components/WhatsappButton";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  );
}

export default App;