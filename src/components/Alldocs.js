import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import "../styles/alldocs.css";
const axios = require("axios");
var jwt = require("jsonwebtoken");

function Alldocs() {
  const { updateState, isLoggedIn } = useContext(GlobalContext);
  const [userData, setUserData] = useState(null);
  const [imagedesc, setImageDiv] = useState({
    image: false,
    imageurl: null,
  });

  const del=function(key,item)
  {
      axios
      .delete(`/imageupload/${item._id}`)
      .then((data)=>{console.log(data)
                    alert("kindly refresh the page")}
      )
      .catch(err=>console.log(err))
  }
  useEffect(() => {
    axios
      .get(`/imageupload`, { withCredentials: true })
      .then((res) => {
        const rawCookie = document.cookie.split(";")[1].split("=")[1];

        var decoded = jwt.decode(rawCookie, { complete: true });
        updateState(decoded.payload);

        if (res.data == null) setUserData(0);
        else setUserData(res.data);
      })
      .catch((err) => {
        console.log(err, "error found during fetching");
      });
  }, []);

  return (
    <>
      {!isLoggedIn && (
        <h1>
          Kindly please Wait Under development <br></br>Please drop your mail
          for the notification
        </h1>
      )}

      {isLoggedIn && (
        <div className="allDocsDiv">
          {isLoggedIn && (
            <div className="addButtonDiv">
              <Link to="/uploads" className="createNewButton">
                {" "}
                Create New{" "}
              </Link>
            </div>
          )}
          <div className="allDocsList">
            {userData &&
              userData.map((item, key) => (
                <>
                  <div className="itemDetails">
                    <div className="DetailsIteInfo">
                      <div className="divisonDetails">
                        <div>
                          <div className="title"> <span className="type">Name</span><br></br>
                          {item.title}</div>
                          <div className="itemCategory"><span className="type">Category</span><br></br>
                          {item.category}</div>
                        </div>
                        <div>
                          <div className="itemPrice"><span className="type">Amount</span><br></br>
                          
                          $ {item.price}</div>
                        </div>
                      </div>
                      <div>----------------</div>
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
                </>
              ))}
            {!userData && <div> No documets available ,Please add</div>}
          </div>
        </div>
      )}
    </>
  );
}
export default Alldocs;
