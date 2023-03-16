 import React from "react";
 import Contact1 from "./Contact1";

function Contact () {
    return (
        <div>
        <div className="about1">
       <div className="about2">
          <h1>Contact Us</h1>
          <p> <a href= "/" > HOME ▸ </a></p>
       </div>      
    </div>
     
        
        
    
          
        <div className="aboutpara">
        <form action="mailto:dareisrael4@gmail.com">
          <label>Name</label> 
          <input type="text" placeholder="Your Name"></input> 
          <label>Email</label>
          <input type="text" placeholder="Your Email Address"></input> 
          <label>Message</label>
          <textarea placeholder="Your Request"></textarea>
          <button type="Submit">Submit</button>

        </form>
                    
     </div> 
    
     
     <Contact1 />
    </div>    
    )
}

export default Contact;