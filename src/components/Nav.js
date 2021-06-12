import React, { useContext } from "react";
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
  return (
    <header>
      <div className="navItems">
        <ul>
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
