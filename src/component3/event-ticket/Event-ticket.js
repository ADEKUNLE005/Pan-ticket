import React from "react";
import "./Event-ticket.css";
import Button from "../../Components/misc/button/button";
import Modal1 from "../modal/modal";
function EventTicket({ showModal }) {
  return (
    <div className="event-ticket-box">
      <p className="get-para">Get your Ticket</p>
      <div className="get-ticket-container">
        <GetTicket
          icon={<div className="one"></div>}
          type={<div className="type-one">Regular Ticket</div>}
          showModal={showModal}
        />
        <GetTicket
          icon={<div className="two"></div>}
          type={<div className="type-two">Vip Ticket</div>}
          showModal={showModal}
        />
        <GetTicket
          icon={<div className="three"></div>}
          type={<div className="type-three">Premium Ticket</div>}
          showModal={showModal}
        />
        <GetTicket
          icon={<div className="four"></div>}
          type={<div className="type-four ">Royalty Ticket</div>}
          showModal={showModal}
        />
      </div>
    </div>
  );
}

export default EventTicket;

export function GetTicket({ icon, type, showModal }) {
  return (
    <div className="get-ticket-box">
      <div className="ticket-box1">
        <div>{icon}</div>
        <div>{type}</div>
      </div>

      <div className="ticket-box2">N1,000.00</div>
      <div className="box-3">
        <div className="inner-1">Quantity</div>
        <div className="inner-2">
          <div className="zero">0</div>
          <div className="white"></div>
        </div>
      </div>

      <div className="box-4">
        <Button title={"Get Ticket"} btnClass={"get"} handleclick={showModal} />
      </div>
    </div>
  );
}
