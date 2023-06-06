
import "../css/Events.css"
import img1 from "../images/mcd.jpg"
import React from "react";


function App() {
    
return (
    <div className="App">   
    <h1 className="head">Upcoming <span className="Heading">Events</span></h1>
    <br></br>
    <br></br>
    
    <div className="Events">

        <div className="bg1" >
            <img id ="img1" src={img1} alt="nature"></img>
           <div className="content">
            <h2 className="social1">Social Media</h2>      
           <p className="para1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Eget nunc lobortis mattis aliquam faucibus purus.  
           </p>
           <p className="more">Read More...</p>          
           </div>           
        </div>

        <div className="bg1" >
            <img id ="img1" src={img1} alt="nature"></img>
           <div className="content">
            <h2 className="social1">Social Media</h2>      
           <p className="para1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Eget nunc lobortis mattis aliquam faucibus purus.  
           </p>
           <p className="more">Read More...</p>          
           </div>           
        </div>
           
        <div className="bg1" >
            <img id ="img1" src={img1} alt="nature"></img>
           <div className="content">
            <h2 className="social1">Social Media</h2>      
           <p className="para1">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Eget nunc lobortis mattis aliquam faucibus purus.  
           </p>
           <p className="more">Read More...</p>          
           </div>           
        </div> 

    </div>
   </div>
   )};

export default App