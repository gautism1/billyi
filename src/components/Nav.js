import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import  '../styles/Nav.css';
import {GoogleLogout} from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Nav() {
  const clientId =
  '450082845907-tij20g3mh4t1f1lqv8ups6544j63a11f.apps.googleusercontent.com';

  const {isLoggedIn,email,logout }=useContext(GlobalContext);   
  const Logout =()=>
  {
          var res = document.cookie;
          var multiple = res.split(";");  
          for(var i = 0; i < multiple.length; i++) {
          var key = multiple[i].split("=");
          document.cookie = key[0]+` =; expires = ${new Date()} UTC`;
      }   
     localStorage.clear();
     logout();
  }
    return (
      <div className="Nav">
     {     isLoggedIn &&  <div className="logoutOuterDiv"> 
                <GoogleLogout
                            clientId={clientId}
                            // render={renderProps => (
                            //  <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="logout"> Log out</button>
                            //  )}
                            buttonText="Logout"
                            onLogoutSuccess={Logout}>
                    </GoogleLogout>
       </div> }
   {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/uploads">Upload File</Link>
            </li>
            <li>
              <Link to="/documents">All documents</Link>
            </li>
          </ul>
  </nav> */}
      </div> 
    );
  }
  export default Nav;
  
