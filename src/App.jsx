import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Offerings from "./components/offerings";
import About from "./components/about";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

const app = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Offerings />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default app;
