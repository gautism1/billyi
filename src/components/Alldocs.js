import React,{useContext,useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
const axios=require('axios');
// const Item = lazy(()=>import('./item'))
function Alldocs() {
  
  const {isLoggedIn }=useContext(GlobalContext);  
  const [userData,setUserData]=useState(null);
  
 
  useEffect(() => {
   
      axios.get(`http://localhost:5000/imageupload`,
      { withCredentials: true ,mode: 'no-cors',
            })
      .then((res) => {
            setUserData(res.data);
            console.log(userData)  ;
    }).catch((err)=>
    {
      console.log(err,"error found during fetching")
    })
    
},[]);
    return (
  <>
        {!isLoggedIn  && <p>All your docs are visible here ,kindly login to see them</p>}
        {isLoggedIn &&
        <div className="allDocsDiv">
            <div className="allDocsList">
            {userData && userData.map((item)=>(<div>{item.title}</div>))}
            </div> 
            Hello how are you
        </div>
        }
     
  
 </>
    );
  }
  export default Alldocs;
  
