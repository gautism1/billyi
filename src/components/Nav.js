import React, { useContext,useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/Nav.css";
import { GoogleLogout } from "react-google-login";
import { NavLink, useHistory } from "react-router-dom";

function Nav() {
  const clientId =
    "450082845907-tij20g3mh4t1f1lqv8ups6544j63a11f.apps.googleusercontent.com";
  const history = useHistory();
  const { isLoggedIn, logout } = useContext(GlobalContext);
  const Logout = () => {
    var res = document.cookie;
    var multiple = res.split(";");
    for (var i = 0; i < multiple.length; i++) {
      var key = multiple[i].split("=");
      document.cookie = key[0] + ` =; expires = ${new Date()} UTC`;
    }
    localStorage.clear();
    logout();
    history.push("/");
  };

  let [showSideNav,setSideNav]=useState(false);
    let close=function(event)
    {
     
      if(event.target.id)
      { history.push(event.target.id)
       setSideNav(!showSideNav)}
    }
  return (
    <header>
          <div className="hamburger">
                  <button onClick={()=> setSideNav(!showSideNav)}>
                    &#9776;
                  </button>
           </div>
     
       { showSideNav &&  
      <div className="sideNav">
          <div  className="close" onClick={()=> setSideNav(!showSideNav)}>
            X 
           </div>
     <ul className="sidebar" onClick={close}>
               
                < div className="navTabs" id="about" >About</div>
               
                < div className="navTabs" id="documents" >Bills</div>
               
                < div className="navTabs" id="features" >Features</div>
                 
                < div className="navTabs" id="contact">Contact</div>
                
              
           </ul>
        </div>}
      <div className="navItems">
        <ul className="navbarUl">
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/documents">Bills</NavLink>
          </li>
          <li>
            <NavLink to="/features">Features</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {isLoggedIn && (   <div className="loginButton">
         
            <div className="logoutOuterDiv">
              <GoogleLogout
                clientId={clientId}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="logout"
                  >
                    {" "}
                    Log out
                  </button>
                )}
                buttonText="Logout"
                onLogoutSuccess={Logout}
              ></GoogleLogout>
            </div>
          
        </div>)}
      </div>
    </header>
  );
}
export default Nav;
