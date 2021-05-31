import "../styles/contact.css";
import React from "react";

function Contact() {
  return (
    <div className="contact">
        <h2>Contact Details</h2>
      <section className="newsletterSection">
        <div className="newsLetter">
          <div className="newLetterInputDiv">
            <div className="contactDetails">
              <div className="contactDetailsInner">
              
                <div className="codeAddress">
                  Permanent Address
                  <p>Virtually working </p>
                </div>
                <div className="codeAddress">
                  Call us
                  <p>9520437027 | 8077952857</p>
                </div>
                <div className="codeAddress">
                  Mail us
                  <p>vipingautam.m@gmail.com </p>
                </div>
              </div>
            </div>
           
            
          </div>
           
        </div>
      </section>
    </div>
  );
}

export default Contact;
