import "../styles/contact.css";
import React from "react";
const axios = require("axios");

function Contact() {

  function submitContactDetails(event)
  {event.preventDefault();
     try{

    var elements = document.getElementById("dataFormContact").elements;
    var obj = {};

    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      obj[item.name] = item.value;
    }
    
       axios.post('/contact',obj)
       .then(data=>console.log(data))
     }
     catch{
       console.log("error")
     }
  }
  return (
    <div className="contact">
      <section>
      <h2>Send us a message</h2>    
      <h4>
        Feel free to contact us anytimewe will definately get back to you as soon as we can.
      </h4>
       <div className="formDetails">
<form onSubmit={submitContactDetails} id="dataFormContact">
    <input type="text" required placeholder="First Name"></input>
    <input type="email"  required  placeholder="Enter your email"></input>
    <input type="number" required placeholder="Contact no."></input>
    <input type="text" required placeholder="Type your message here" className="textareaContactDetails"></input>
    
<button type="submit " className="contactButton" max="10" min="10">Send Message</button>
</form>
</div>
      </section>
          </div>
  );
}

export default Contact;