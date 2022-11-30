import React from "react";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Category from "../components/Category";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <MainSection />
      <Category />
    </div>
  );
};

export default Homepage;
