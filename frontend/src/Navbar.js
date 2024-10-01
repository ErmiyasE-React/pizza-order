import "./navbar.css"
import { Link } from "react-router-dom";


function Navbar(){
   return (
       <>
       <div className="nav">
               <div className="nav-title">
                   <h1> SYSTEM</h1>
               </div> 
               <div className="nav-main"></div>
               <div className="nav-menu">

                   <ul>
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/contact">Contact</Link></li>
                       <li><Link to="/Feedback">Feedback</Link></li>
                   </ul>
               </div>    
             
       </div>
   
       </>
    
   );
}
export default Navbar