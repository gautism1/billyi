import React,{useContext,useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
const axios=require('axios');
function Alldocs() {
  
  const {isLoggedIn,user_id  }=useContext(GlobalContext);  
const [userData,setUserData]=useState();
  useEffect(() => {

//   const a=  fetch('http://localhost:5000/imageupload', {
//       method: 'GET',
//       mode: 'no-cors',
//       credentials: 'include'
//     })
//       .then((response) => {console.log(response)
//  }
//      ).catch((err) => {
//         console.log(err);
//     });

 axios.get(`http://localhost:5000/imageupload`,
 { withCredentials: true ,mode: 'no-cors',
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
              
            </div>Gauti gauti
            Hello how are you
        </div>
        }
  </nav>
 
    );
  }
  export default Alldocs;
  
