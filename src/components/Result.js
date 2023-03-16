import React, { useState } from "react"
import Contact1 from "./Contact1";

function Results () {

    const [result, setResult] = useState ("");
    const [change, setChange] = useState ("");

        function message (event) {
            return setChange (event.target.value);
        }
         function Check () {
             
               if (change === "xyz") {
                 return   setResult ("No Result Available Yet");
        } else if (change === "kpk"){
                   return setResult ("Your Result will be out soon");
                
            } else {
                return setResult ("Invalid Code")
            }
         }




    return (
       
        

        <div>
         <div className="Result">

            <h1>Results</h1>
            <div className="ResultIn">

            <input className="ResultInp" type="text" onChange={message} placeholder="Input your code"></input>
            <button className="ResultBut"  onClick={Check} type="Submit">Submit</button>
            </div>
            <div className="resultcopy">
            <h1>{result} </h1>
            </div>
            </div>
            <Contact1 />
            </div>
        
        
    )
}

export default  Results;