 import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";

function Navbar () {

    const [nav, setNav] = useState("navUl");
    const [cancel, setCancel] = useState(false);

    function toggle () {
        return (
          nav === "navUl" ? setNav ("navUl nav_active") : setNav ("navUl"),
          setCancel(!cancel)
        )
    }

    
    return (
       <div className="navCom">
       
       <nav className="navlist">
        
          <div className="navTitle">
          <h1> 🎓Gifted</h1>
          <p>Model School</p>
          </div>
            <ul className={nav}>
           <li  > <Link className="navli"  to="/">Home</Link>  </li> 
           <li > <Link className="navli"  to="/about">About</Link>  </li> 
           <li  >  <Link className="navli" to="/contact">Contact</Link> </li> 
            <li  > <Link className="navli" to="/admission">Admission</Link> </li>
            <li  > <Link className="navli" to="/result">Results</Link> </li>

            </ul>
             <span onClick={toggle} className="navIcon">
             {cancel ? (<BsXLg />) : (<BsList/>)}
             </span> 
        </nav>
       
        
        
        <Outlet />
      </div>


    )
}

export default Navbar;