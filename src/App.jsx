import "./css/App.css";

import { Routes, Route, useLocation, } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

import WhatsappButton from "./components/WhatsappButton";
import ScrollProgress from "./components/ScrollProgress";
import Services from "./pages/Services";
import Loader from "./components/Loader";

function App() {
    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname]);

  const [loading, setLoading] =
  useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <Loader />;
}

  return (
    <>
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
    </>
  );
}

export default App;