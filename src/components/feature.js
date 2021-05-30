import React from "react";
import "../styles/feature.css";
import bill from "../assets/bills.svg";
import bell from "../assets/bell.svg";
import subscribe from "../assets/subscribe.svg";
function Feature() {
  return (
    <section>
      <div>
         <h2>
            Hate searching bills ? <br></br>....Let Billyi do the work for you
         </h2>
         <h4>
            Billyi  is the ultimate  bills tracking & management tool
         </h4>
        <div className="featureList">
          <div className="featureCard">
            <div className="featureImageDiv">
              <img src={bill} alt="fatureimage"></img>
            </div>
            <h5>Bills</h5>
           <span>
               Keeps your bills on your fingertips
           </span>
          </div>
          <div className="featureCard">
          <p>Upcoming</p>
            <div className="featureImageDiv">
              <img src={subscribe} alt="fatureimage"></img>
            </div>
            <h5>Subscripion</h5>
         <spna>
             Manages your Subscripion and their billing analytics
         </spna>
          </div>
          <div className="featureCard">
          <p>Upcoming</p>
            <div className="featureImageDiv">
              <img src={bell} alt="fatureimage"></img>
            </div>
            <h5>Reminders</h5>
            <span>
                Manages reminders of due dates
            </span>
          </div>  
        </div>
      </div>
    </section>
  );
}
export default Feature;
