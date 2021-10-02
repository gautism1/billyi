import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "../styles/alldocs.css";
const axios = require("axios");
var jwt = require("jsonwebtoken");

function Alldocs() {
  const { updateState, isLoggedIn } = useContext(GlobalContext);
  const [userData, setUserData] = useState([]);
  const [imagedesc, setImageDiv] = useState({
    image: false,
    imageurl: null,
  });

  const del=function(key,item)
  {
      axios
      .delete(`/imageupload/${item._id}`)
      .then((data)=>{ 
                    alert("Item deleted")
                    window.location.reload(true/false);}
      )
      .catch(err=>console.log(err))
  }
  
  useEffect(() => {
    axios
      .get(`/imageupload`, 
      { withCredentials: true })
      .then((res) => {
        
        const rawCookie = document.cookie.split(";")[1].split("=")[1];
        var decoded = jwt.decode(rawCookie, { complete: true });
        updateState(decoded.payload);

        console.log(">",res.data)
        if (res.data && Array.isArray(res.data))
            { setUserData(res.data); }
       
      })
      .catch((err) => {
        console.log(err, "error found during fetching");
      });
  }, []);

  return (
    <>
      {!isLoggedIn && (
       <>
         Please login first to get your important documents 
         </>
      )}

      {isLoggedIn && (
        <div className="allDocsDiv">
         
            <div className="addButtonDiv">
              <Link to="/uploads" className="createNewButton">
                {" "}
                Create New{" "}
              </Link>
            </div>
          
          <div className="allDocsList">
            { 
            userData && (userData!=null) && userData.length > 0 &&
              userData.map((item, key) => (
              
                  <div className="itemDetails" key = {key   }>
                    <div className="DetailsIteInfo">
                      <div className="divisonDetails">
                        <div>
                          <div className="title"> <span className="type">Name : </span> 
                          {item.title}</div>
                          <div className="itemCategory"><span className="type">Category : </span> 
                           {item.category}</div>
                        </div>
                        <div>
                          <div className="itemPrice"> 
                          
                          $ {item.price}</div>
                        </div>
                      </div>
                    
                      <div className="itemImageDiv">
                        <img
                          src={item.imageUrl}
                          alt="document"
                          onClick={(event) => {
                            setImageDiv({
                              image: !imagedesc.image,
                              imageurl: item.imageUrl,
                            });
                          }}
                          className="itemImage"
                        />
                      </div>

                      <div className="deleteItem">
                        <a
                          href={item.imageUrl}
                          className="createNewButton download"
                          download
                        >
                      
                          Download
                        </a>
                        <button className="createNewButton delete"
                        onClick={()=>del(key,item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                
              ))}
            {userData.length ===0 && <div> No documets available ,Please add</div>}
          </div>
        </div>
      )}  
    </>
  );
}
export default Alldocs;
