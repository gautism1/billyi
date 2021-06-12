import React from "react";
import "../styles/feature.css";
import bill from "../assets/bills.svg";
import bell from "../assets/bell.svg";
import subscribe from "../assets/subscribe.svg";
function Feature() {
  return (
    
      <div>
        <h2>
         Features we provide <br></br>
        </h2>
         <div className="featureList">
          <div className="featureCard">
            <div className="featureImageDiv">
              <img src={bill} alt="fatureimage"></img>
            </div>
            <h5>Bills</h5>
            <span>Keeps your bills on your fingertips</span>
          </div>
          <div className="featureCard">
            <p>Upcoming</p>
            <div className="featureImageDiv">
              <img src={subscribe} alt="fatureimage"></img>
            </div>
            <h5>Subscripion</h5>
            <span>Manages your Subscripion and their billing analytics</span>
          </div>
          <div className="featureCard">
            <p>Upcoming</p>
            <div className="featureImageDiv">
              <img src={bell} alt="featureimage"></img>
            </div>
            <h5>Reminders</h5>
            <span>Manages reminders of due dates</span>
          </div>
        </div>
      </div>
    
  );
}
export default Feature;
