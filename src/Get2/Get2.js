import React, { useState } from "react";
import Navbar from "../Components/Navbar/navbar";
import Banner2 from "../component3/banner2/banner2";
import { Link } from "react-router-dom";
import BuyTickets, { Thank } from "../component4/buy-tickets/Buy-Tickets";
import Promoter from "../component4/promoter/promoter";
import EventNote from "../component3/event-note/Event-note";
import Footer from "../Components/footer/footer";
import Modal4 from "../modal4/Modal4";
function Get2() {
  const [modal4, setModal4] = useState(false);

  function handleModal4() {
    setModal4((prev) => !prev);
  }
  return (
    <div>
      {modal4 ? <Modal4 setModal4={handleModal4} /> : null}

      <Navbar />
      <Banner2 />
      <BuyTickets Thank={<Thank />} showModal4={setModal4} />
      <Promoter />
      <EventNote />
      <Footer />
      <div className="link">
        <Link to={"/Get"}>go to previuos page</Link>
        <Link to={"/Get3"}>go to next page</Link>
      </div>
    </div>
  );
}

export default Get2;
