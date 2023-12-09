import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar";
import Banner2 from "../component3/banner2/banner2";
import BuyTickets from "../component4/buy-tickets/Buy-Tickets";
import Promoter from "../component4/promoter/promoter";
import EventNote from "../component3/event-note/Event-note";
import Footer from "../Components/footer/footer";
import Page5 from "../component3/page5/page5";
function Get3() {
  return (
    <div>
      <Navbar />
      <Banner2 />
      <Page5 />
      <BuyTickets />
      <Promoter />
      <EventNote />
      <Footer />
      <div></div>
    </div>
  );
}

export default Get3;
