import React from "react";
import "./modal2.css";
import { ModalBox } from "../modal/modal";
import Button from "../../Components/misc/button/button";

function Modal2({ setModal2, showModal3 }) {
  return (
    <div className="modal2-main">
      <div className="modal2-box1">
        <p className="para-pay">Make Payment</p>
        <div className="modal-icon" onClick={setModal2}>
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
      <div className="modal2-box2">
        <div className="modal2-para2">Card Payment</div>
        <div className="modal2-para3" onClick={showModal3}>
          Bank Transfer
        </div>
      </div>
      <div className="modal2-box3">
        <div className="modal2-innerboxa">
          <div className="form-box">
            <label className="label">Card Number</label>
            <input
              type="text"
              name="Name"
              className="input"
              placeholder="placeholder"
            />
          </div>
          <div className="row-2">
            <div className="form-box">
              <label className="label">Expiry Date</label>
              <input
                type="text"
                name="Name"
                className="input"
                placeholder="placeholder"
              />
            </div>

            <div className="form-box">
              <label className="label">CVV</label>
              <input
                type="text"
                name="Name"
                className="input"
                placeholder="placeholder"
              />
            </div>
          </div>
          <Button title={"Make Payment"} btnClass={"modal-pay"} />
        </div>
        <div className="modal2-innerboxb">
          <ModalBox />
        </div>
      </div>
    </div>
  );
}

export default Modal2;
