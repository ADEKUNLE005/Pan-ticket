import React from "react";
import "./ticket.css";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar";
import Button from "../Components/misc/button/button";
import Banner from "../Components/banner/banner";
import Result from "../components2/result/result";
import Footer from "../Components/footer/footer";
function Ticket() {
  return (
    <div>
      <Navbar />
      <Banner link="/Get" />
      <Result />
      <Footer />
      <div className="link">
        {/* <Link to={"/Home"}>go to previous page</Link> */}
        {/* <Link to={"/Get"}>go to next page</Link> */}
      </div>
    </div>
  );
}

export default Ticket;
