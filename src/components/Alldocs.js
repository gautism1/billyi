import React,{lazy,useContext,useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';

import  '../styles/alldocs.css';
const axios=require('axios');

const Item = lazy(()=>import('./item'))
function Alldocs() {
  
  const {isLoggedIn }=useContext(GlobalContext);  
  const [userData,setUserData]=useState(null);
  const [image,setImageDiv]=useState(false);
  
 
  useEffect(() => {
   
      axios.get(`http://localhost:5000/imageupload`,
      { withCredentials: true ,mode: 'no-cors',
            })
      .then((res) => {
            setUserData(res.data);
            
    }).catch((err)=>
    {
      console.log(err,"error found during fetching")
    })
    
},[]);
    return (
  <>
        {!isLoggedIn  && <p>All your docs are visible here ,kindly login to see them</p>}
        {isLoggedIn &&
        <div className="allDocsDiv">  <h3>Your Bills /Documents</h3>
            <div className="allDocsList">
            {userData && userData.map((item,key)=>(    
            <div className="itemDetails">   

              <div className="symbol">&#128512;
                </div> 
                <div>
                   <div className="title">  {item.title}
                   </div>  
                   <div className="itemCategory">
                     {item.category}
                     </div>
                     <div className="itemPrice">
                  <p>   ${item.price}</p> 
                     </div>
                  </div>
               <div className="itemImageDiv">
                    <img src={item.imageUrl} onClick={()=>
                    {
                      setImageDiv(!image);
            
                    }}  className="itemImage"></img>

                  {image &&  <Item 
                    image={userData[key].imageUrl}
                    />}
                 </div>
            </div>
            ))}
            </div> 
        </div>
        }
 </>
    );
  }
  export default Alldocs;
  
