import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import Banner from "../../Components/banner/banner";
import Section from "../../Components/section/section";
import { Link } from "react-router-dom";
import Button from "../../Components/misc/button/button";
import "./home.css";
import Footer from "../../Components/footer/footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Banner
        link=
        "/Ticket"
      />
      <Section />
      <Footer />
    </div>
    
  );
}

export default Home;
