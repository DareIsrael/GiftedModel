import React, { useState } from 'react'

function SubNav () {

    const [Sub, setNav] = useState ("swap");
    const [Sub2, setNav2] = useState("swap");
    const [Sub3, setNav3] = useState("swap")


      function mouse () {
      return setNav ("swap-1")
     }
      function mouse2 () {
        return setNav ("swap");
     }
     function mouse3 () {
        return setNav2 ("swap-2")
     }
     function mouse4 () {
        return setNav2 ("swap")
     }
     function mouse5 () {
        return setNav3 ("swap-3")
     }
     function mouse6  () {
        return setNav3 ("swap")
     }

    // onMouseOver={mouse} onMouseOut={mouse2}   {Sub} 
    
    
        return (
            <div className='SubNav'>
             <ul className='SubList'>
                 <li onMouseOver={mouse} onMouseOut={mouse2}  >Enrolment</li> 
                 <li onMouseOver={mouse3} onMouseOut={mouse4}>Additional Learning</li>
                <li onMouseOver={mouse5} onMouseOut={mouse6} >Student Services</li>
                <li>Contact</li>

                 </ul>
                 <div className={Sub}>
                 <p>Enrolment is the process that allows you to officially become a student of Gifted Model College. Enrol now by <a href=''>Contacting Us</a></p>
                 
                 </div>

                 <div className={Sub2}>
                    <p> The College offers extra support in literacy, language, 
                       numeracy and in a variety of skills to help you to learn and achieve your
                       chosen qualification.
                     </p>
                 </div>

                 <div className={Sub3}>
                  <ul className='swap3list'>
                    <li>Information, advice and guidance </li>
                    <li> Careers, advice and employability skills</li>
                    <li>Events and activities </li>
                    <li>Support for young people in care or recent care leavers </li>
                  </ul>
                 </div>
                 
                
            </div>
        )
    
}

export default SubNav;
