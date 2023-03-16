import React from "react";

function Home3 (props) {
    return (
        
          <div className="homepage3">
            <img src={props.img}></img>
                <div className="homepage333">
                    <h3>{props.head}</h3>
                    <p>{props.para}</p>
                   <a href=""><button>{props.button}</button>  </a> 
                </div>
            </div>
           
    )
}

export default Home3;




