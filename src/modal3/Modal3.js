import React from "react";
import "./modal3.css";
import { ModalBox } from "../component3/modal/modal";
import Button from "../Components/misc/button/button";
function Modal3({ setModal3, setModal2 }) {
  return (
    <div className="modal3-main">
      <div className="modal2-box1">
        <p className="para-pay">Make Payment</p>
        <div className="modal-icon" onClick={setModal3}>
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
        <div className="modal2-para3" onClick={setModal2}>Card Payment</div>
        <div className="modal2-para2">Bank Transfer</div>
      </div>
      <div className="modal3-box3">
        <div className="modal3-innerboxa">
          <p className="modal3-para1">Send fund to the following account</p>
          <div className="modal3-parabox">
            <ModalPara texta={"Bank Name"} textb={"GTBank"} />
            <ModalPara texta={"Account Number"} textb={"0123 4567 89"} />
            <ModalPara texta={"Account Name"} textb={"Panticket Limited"} />
            <ModalPara texta={"Payment Status"} textb={"Waiting"} />
          </div>
          <Button title={"Confirm Payment"} btnClass={"modal-pay"} />
        </div>
        <div className="modal3-innerboxb">
          <ModalBox />
        </div>
      </div>
    </div>
  );
}

export default Modal3;

export function ModalPara({ texta, textb }) {
  return (
    <div id="text-box">
      <div id="text-1">{texta}</div>
      <div id="text-1">{textb}</div>
    </div>
  );
}
