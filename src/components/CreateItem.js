import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/Create.css";
const axios = require("axios");
function CreateItem() {
  const [img, setImage] = useState();

  const { user_id, isLoggedIn } = useContext(GlobalContext);

  const submit = function (e) {
    e.preventDefault();

    var elements = document.getElementById("dataform").elements;
    var obj = {};

    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
      obj[item.name] = item.value;
    }
    
    const data = new FormData();
    data.append("file", img);
    data.append("category", obj.category);
    data.append("title", obj.title);
    data.append("price", obj.price);
    data.append("user_id", user_id);

    axios
      .post("/imageupload", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((data) => {
        alert("kudos !! Product details have been successfully uploaded ");
        document.getElementById("dataform").reset();
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  };

  const onChangeHandler = function (e) {
    setImage(e.target.files[0]);
  };
  return (
    <div className="create">
      <div className="createInnerDiv">
        {isLoggedIn && (
          <form onSubmit={submit} id="dataform" encType="multipart/form-data">
            <input
              type="text"
              placeholder="Title"
              name="title"
              required
            ></input>
            <br></br>
            <input
              type="number"
              placeholder="Price"
              name="price"
              required
            ></input>
            <br></br>

            <span> Select Category</span>
            <br></br>
            <select name="category" id="category">
              <option value="Electricity">Electricity</option>
              <option value="Water">Water</option>
              <option value="Internet">Internet</option>
              <option value="House_Rent">House Rent</option>
            </select>
            <br></br>
            <input
              type="file"
              required
              name="UserPhoto"
              onChange={onChangeHandler}
            ></input>
            <br></br>
             <input
              type="submit"
              className="createButton"
              value="Create"
            ></input>
          </form>
        )}

        {!isLoggedIn && <p>Kindly login first</p>}
      </div>
    </div>
  );
}
export default CreateItem;
