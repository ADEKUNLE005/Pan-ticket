import React from "react";
import "./page5.css";
function Page5() {
  return (
    <div className="page5-container">
      <div className="page5-box">
        <div className="box-1">Ticket Details</div>
        <div className="box-2">
          <div className="box2-inner1">
            <div className="para-1">Ticket Status</div>
            <div className="para-2">Converted</div>
          </div>
          <div className="box2-inner1">
            <div className="para-1">Ticket Vendor</div>
            <div className="para-3">Damochain</div>
          </div>
          <div className="box2-inner1">
            <div className="para-1">Issued by</div>
            <div className="para-3">Damola Adeyinka</div>
          </div>
          <div className="box2-inner1">
            <div className="para-1">Issuance Date</div>
            <div className="para-3">12 Jan, 2022</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page5;
