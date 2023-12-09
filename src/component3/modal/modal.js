import React, { useState } from "react";
import "./modal.css";
import Button from "../../Components/misc/button/button";
function Modal1({ setModal, showModal2 }) {
  return (
    <div className="big-box">
      <div className="modal-box">
        <div className="modalpara-box">
          <div className="modal1-para">Book Ticket</div>
          <div className="modal-icon" onClick={setModal}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#666670"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#666670"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className=" modal1-innerbox">
          <div className="innerbox-a">
            <div className="form-box">
              <label className="label">Name</label>
              <input
                type="text"
                name="Name"
                className="input"
                placeholder="placeholder"
              />
            </div>

            <div className="form-box">
              <label className="label">Email</label>
              <input
                type="text"
                name="Email"
                className="input"
                placeholder="placeholder"
              />
            </div>
            <div id="form-box">
              <label id="label">Phone</label>
              <input
                type="text"
                name="phone"
                className="input"
                placeholder="placeholder"
              />
            </div>

            <div className="form-box">
              <label className="label">Guest Email</label>
              <input
                type="text"
                name="Guest Emial"
                className="input"
                placeholder="placeholder"
              />
            </div>
            <Button
              title={"Make Payment"}
              btnClass={"modal-pay"}
              handleclick={showModal2}
            />
          </div>
          <div className="innerbox-b">
            <ModalBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal1;

export function ModalBox() {
  return (
    <div className="modalbox-container">
      <div className="innerboxb-1">
        <div className="container-a">
          <p className="ticket-para1">Regular ticket</p>
          <p className="ticket-para1">Qty x 2</p>
        </div>
        <div className="container-b">
          <p className="ticket-para1">Sub-total</p>
          <p className="ticket-para1">VAT7.5%</p>
          <p className="ticket-para2">Total</p>
        </div>
      </div>
      <div className="innerboxb-2">
        <div className="container-c">
          <p className="ticket-para3">(N1,000.00)</p>
          <p className="ticket-para4">(N2,000.00)</p>
        </div>
        <div className="container-d">
          <p className="ticket-para4">(N2,000.00)</p>
          <p className="ticket-para4">(N150.00)</p>
          <p className="ticket-para2">N2,150.00</p>
        </div>
      </div>
    </div>
  );
}
