import "../styles/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <footer>
        <div className="footerDiv">
          <div className="footerInnerDiv">
            <div className="footerLeft">
              <div className="footerDiv1">
               
                <ul>
                  <li>About</li>
                  <li>Features</li>
                  <li>Privacy</li>
                  <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
                </ul>
              </div>
              <div className="footerDiv2">
                
                <ul>
                  <li>Blog</li>
                  <li>Twitter</li>
                  <li>Instgram</li>
                  <li>Telegram</li>
                </ul>
              </div>
            </div>
            <div className="footerRight">
              <p>Billyi</p>
              <p>
                BILLYI is a platformwhere user can store important information|
                documents |files and folder as well. where ever requiredit can
                have them
              </p>
            </div>
          </div>
          <hr></hr>
          <div className="copyright">
            © BILLYI • Privacy,copyright @gauti.in
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
