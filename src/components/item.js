import React from 'react';
// import { GlobalContext } from '../context/GlobalState';

import  '../styles/alldocs.css';

function item(params) {

function handeleModal()
{
  console.log(params)
}

  
    return (
 <div className="imagePopup">
    <div>

       <button className="closeImage" onClick={()=>handeleModal()} >Close</button>
       <img src={"AS"} className="OverlayImage"  alt="overlayed image"/>
    </div>

 </div>
    );
  }
  export default item;
  
