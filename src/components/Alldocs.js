import React,{useContext,useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link } from 'react-router-dom';
import  '../styles/alldocs.css';
const axios=require('axios');

function Alldocs() {
  
  const {isLoggedIn }=useContext(GlobalContext);  
  const [userData,setUserData]=useState(null);
  const [imagedesc,setImageDiv]=useState({
    image:false,
    imageurl:null
    
  });
  
 
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
        {!isLoggedIn  && <h3>All your docs are visible here ,kindly login to see them</h3>
        
        }
        {isLoggedIn &&
        <div className="allDocsDiv">  
       {
          isLoggedIn &&  
         <div className="addButtonDiv">  
            <Link to="/uploads" className="createNewButton">   Create New  </Link>
         </div>
        } 
            <div className="allDocsList">
            {userData && userData.map((item,key)=>( 
              <>   
            <div className="itemDetails">   
                <div className="DetailsIteInfo">
                <div className="divisonDetails">
                    <div>
                      <div className="title">  {item.title}
                       </div>  
                      <div className="itemCategory">
                        {item.category}
                       </div>  
                    </div>
                     <div>
                     <div className="itemPrice">
                    $ {item.price}
                     </div> 
                  
                    </div>
                </div>
               <div>----------------</div>
                 <div className="itemImageDiv">
                    < img src={item.imageUrl} 
                    alt="document" 
                    onClick={(event)=>
                    {   
                       setImageDiv({
                         image:!imagedesc.image,
                         imageurl:item.imageUrl
                       });
            
                    }}  className="itemImage" />

                  
                   
                 </div> 
                 <div className="deleteItem">
                   <button className="createNewButton delete"   >
                    Remove
                   </button>
                 </div>
              </div>
             
            </div>
              
            </>
            ))}
       
            </div> 
        </div>
        }
 </>
    );
  }
  export default Alldocs;
  
 