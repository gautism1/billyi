import '../styles/about.css'
 import gauti from '../assets/gauti.jpeg'
function AboutCode() {
    return (
      <div className="mission">
         
               <h1>
                 Who  makes  "Billyi"
                </h1>
                <div className="aboutImage">
                </div>
                   <p>Billyi is made by
                   </p>            
                   <br>
                   </br>
                   <span>
                     Vipin Gautam
                   </span>
                   <p className="developerIntro">
               <div className="developerImage ">
                <img src={gauti} alt="Gauti_image">
                </img>
              </div>
                     <a href="https://www.linkedin.com/in/vipingautamj/"> 
                       Vipin Gautam : 
                     </a>22 year .
                       A software developer who's been writing code for over a year. Most recently he devloped Billyi lead programmer and co-designer of 
                      <a href="https://notekia.herokuapp.com/" target="_blank" rel="noreferrer" > Notekia</a>, Mostly works in MERN, Core concepts of JS and building blocks of Web (HTML CSS).
                      <b> Does free-lancing projects </b>
                   </p>
             
          
      </div>
    );
  }
  
  export default AboutCode;
  