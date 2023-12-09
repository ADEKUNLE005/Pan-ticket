import React from "react";
import "./Buy-Tickets.css";
import Button from "../../Components/misc/button/button";
function BuyTickets({ Thank, showModal4 }) {
  return (
    <div className="buy-ticket-main">
      <div id="buy-ticket-container">
        {Thank}
        <div id="box-2">
          <p className="text-2">You are set for;</p>
          <div id="pelumi">
            Pelumi <p id="musical">(The musical play by Muyiwa Adigun)</p>
          </div>
        </div>
        <div id="text-3">Your VIP ticket numbert is #12345687</div>
        <div id="text-4">
          1 Ticket has been sent to {`dotun@example.com.`} Please use this
          number to get a physical pass at the event.
        </div>
        <div id="text-5">N.B: One ticket is valid for just one person</div>
        <div id="box-3">
          <div id="box3-inner1">
            <p id="text-6">Date & Time</p>
            <div id="innerbox-b">
              <p id="text-7">On 14th February, 2022</p>
              <p id="text-8">5PM WAT</p>
            </div>
          </div>
          <div id="box3-inner2">
            <p id="text-9">Venue</p>
            <p id="text-10">Oduduwa Hall, OAU, Ile-Ife, Osun State</p>
          </div>
        </div>
      </div>
      <div id="btn-box">
        <Button
          title={"Download Ticket"}
          btnClass={"down"}
          handleclick={showModal4}
        />
        <Button title={"share Event"} btnClass={"share"} />
      </div>
    </div>
  );
}

export default BuyTickets;

export function Thank() {
  return (
    <div id="box-1">
      <div className="icon-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z"
            stroke="#24B561"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p className="text-1">Thanks for your purchase</p>
    </div>
  );
}
