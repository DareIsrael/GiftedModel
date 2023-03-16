 import React from "react"
import Caro from "./Caro";
import Contact1 from "./Contact1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import SubNav from "./SubNav";



function Home() {
    return (
        <div className="navOp">
         <div className="home">
         <div className="homepage">
         <div className="homeh3">
         <h3 > “Education is the passport to the future, 
         for tomorrow belongs to those who prepare for it today" </h3>
        <a href="/contact" > <button className="homeContactbutton">Contact Us ➤ </button> </a>  
         </div>
         
         
        </div>
       
        </div>
         <SubNav />
         <Home2 />
         <Home4 />
         <Contact1 />
        </div>
        
        

    
        

    )
}

export default Home;