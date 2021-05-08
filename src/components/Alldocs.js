import React,{useContext,useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
const axios=require('axios');
function Alldocs() {
  
  const {isLoggedIn,user_id  }=useContext(GlobalContext);  
const [userData,setUserData]=useState();
  useEffect(() => {
    axios.get(`http://localhost:5000/imageupload`,{
       
    }).then((res) => {

       console.log(res.data);
    }).catch((err)=>
    {
        console.log(err,"error found during fetching")
    })
},[]);
    return (
   <nav>
        {!isLoggedIn  && <p>All your docs are visible here ,kindly login to see them</p>}
        {isLoggedIn &&
        <div className="list">
            <div>
              
            </div>
            Hello how are you
        </div>
        }
  </nav>
 
    );
  }
  export default Alldocs;
  
