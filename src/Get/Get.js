import React, { useState } from "react";
import Navbar from "../Components/Navbar/navbar";
import { Link } from "react-router-dom";
import Banner2 from "../component3/banner2/banner2";
import "./Get.css";
import Modal1 from "../component3/modal/modal";
import Event from "../component3/event/event";
import EventTicket, {
  GetTicket,
} from "../component3/event-ticket/Event-ticket";
import EventNote from "../component3/event-note/Event-note";
import Footer from "../Components/footer/footer";
import Modal2 from "../component3/modal2/modal2";
import Modal3 from "../modal3/Modal3";

function Get() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  function handleModal() {
    setModal((prev) => !prev);
  }
  function handleModal2() {
    setModal(false);
    setModal3(false);
    setModal2((prev) => !prev);
  }
  function handleModal3() {
    setModal2(false);
    setModal3((prev) => !prev);
  }
  return (
    <div>
      {modal ? (
        <Modal1 setModal={handleModal} showModal2={handleModal2} />
      ) : null}
      {modal2 ? (
        <Modal2 setModal2={handleModal2} showModal3={handleModal3} />
      ) : null}
      {modal3 ? (
        <Modal3 setModal3={handleModal3} setModal2={handleModal2} />
      ) : null}

      <Navbar />
      <Banner2 />
      <Event />
      {/* <GetTicket /> */}
      <EventTicket showModal={setModal} />
      <EventNote />
      <Footer />

      <div id="blink">
        <Link to={"/Ticket"}>go to previous page</Link>
        <Link to={"/Get2"}>go to next page</Link>
      </div>
    </div>
  );
}

export default Get;
