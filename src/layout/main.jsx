import React from "react";

// components
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
