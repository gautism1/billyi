import React,{useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import  '../styles/footer.css';
function Footer() {

  const {email }=useContext(GlobalContext);   
    return (
      <div className="footer">
      <div className="footerInnerDiv">
          @billyi.com
        </div>
      </div> 
    );
  }
  export default Footer;
  
