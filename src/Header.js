import React from  'react';
import header from './Header.css';

const Header = function(props){
   
return(
    
    <div className = "header">
      {props.heading}<br/>
      {props.instructor}
   </div>


)


}

export default Header;

// class Header extends Component {
// render(){

//     return(
//     <div className = "header">
//            Phone Directory
//         </div>

//     )

// }


// }
