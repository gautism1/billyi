import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import  '../styles/Body.css';
import { GlobalContext } from '../context/GlobalState';
import { GoogleLogin } from 'react-google-login';
const axios = require('axios');
var jwt=require('jsonwebtoken')

// const CreateItem = lazy(() => import("../components/CreateItem"));

function Home() {
  const history = useHistory();
 
  // '450082845907-tij20g3mh4t1f1lqv8ups6544j63a11f.apps.googleusercontent.com';
  const clientId =' 804279594253-i65b0m9kd0ei03n3hhi5ks569ge53n5u.apps.googleusercontent.com' ;

const {updateState,isLoggedIn}=useContext(GlobalContext);   

const responseGoogle = (res) => {
  axios.post("/auth",{token:res.tokenId})
  .then(res=>
    {      
         try 
         {
          var decoded = jwt.decode(res.data, {complete: true});
              updateState(decoded.payload);
             
              document.cookie = `cookieName=${res.data};path=/`;
                history.push('/documents')
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
            <h1>B.</h1>
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
                
            <GoogleLogin
               clientId={clientId}
               onSuccess={responseGoogle}
               onFailure={onFail}
               cookiePolicy={'single_host_origin'}
               isSignedIn={true}
               render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login"> Login</button>
                )}
               />        
            </div>

       </div> 
     } 
     {  isLoggedIn && <div>Home logged in {isLoggedIn
      }
       </div>

     }
   
      </div>
    );
  }
  
  export default Home;
  
