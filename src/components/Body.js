import React,{useContext} from 'react';
import {
  Link
} from "react-router-dom";
import { lazy } from "react";
import  '../styles/Body.css';
import { GlobalContext } from '../context/GlobalState';
import { GoogleLogin ,GoogleLogout} from 'react-google-login';
const axios = require('axios');
var jwt=require('jsonwebtoken')

const CreateItem = lazy(() => import("../components/CreateItem"));

function Body() {
  const clientId =
  '450082845907-tij20g3mh4t1f1lqv8ups6544j63a11f.apps.googleusercontent.com';

const {updateState,isLoggedIn,logout}=useContext(GlobalContext);   

const responseGoogle = (res) => {
  axios.post("http://localhost:5000/auth",{token:res.tokenId})
  .then(res=>
    {      
         try 
         {
          var decoded = jwt.decode(res.data, {complete: true});
              updateState(decoded.payload);
              document.cookie = "cookieName="+res.data+";"+"path=/";
        } 
        catch(err) {
           console.log(err)
        } 
    })
    .catch(err=>
        {
            console.log(err);
            alert("Something went wrong")
        })
      }
    const onFail=(res)=>
    {
    alert("Login failed :(")
    }
   
    return (
      <div className="mainBody">
        { !isLoggedIn && <div className="titleName"> 
            <span>  
            <h1>B</h1>
            </span> 
          </div>}
     {
       !isLoggedIn &&
        <div className="loginDiv">       
           <div className="headings">
             <h2>
              Lets's Get 
              Started  
             </h2>
             <h6>
               Bring memory on fingertips
             </h6> 
             </div>
             <div className="LoginButtonOuterDiv">
               <span>
            <GoogleLogin
               clientId={clientId}
        //  render={renderProps => (
        //      <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="loginButon"> Login with Gmail</button>
        //    )}
       onSuccess={responseGoogle}
       onFailure={onFail}
       cookiePolicy={'single_host_origin'}
               isSignedIn={true}/>
               </span>
            </div>
    
       </div> 
     } 
     {
       isLoggedIn &&  
      <div>
         
         <Link to="/uploads" className="getstarted">Create a New Bill</Link>
      </div>
     } 
      </div>
    );
  }
  
  export default Body;
  
