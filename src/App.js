import React, { Component } from 'react';
import Header from './Header.js';	
import './App.css';


 class App extends Component {	

  clickHandler(message){

  alert(message);
}


  render() {
    
    let subscribers = [
            {
              id :1,
              name : "shilpa",
              phone:"888888888"
            },
            {
              id:2,
              name : "shen",
              phone : "999999999"
            }


    ]


    return (	    
      <div>	      
           

        	  
              <div className="component-body-container">
                <Header heading = "Phone Directory" instructor = " By Deepa"/>	     
                  <button className="custom-btn add-btn">Add</button>
             
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {


           subscribers.map(sub => {


            return <div key = {sub.id} className = "grid-container">
            <span className= "grid-item">{sub.name}</span>
            <span className= "grid-item">{sub.phone}</span>
            <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick = {this.clickHandler.bind(this,"Delete Clicked")}>Delete</button>
                </span>
           </div>


           })


          }

        </div>	       
      </div>
    
      
 

);

    	 
  }
}



export default App;