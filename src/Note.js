import { Link,Routes,
  Route } from "react-router-dom";
import { useState,} from "react";
let Note=(props)=>{
let fl=false
  return(
    <>
   <Link to='/view'> <div className='notediv' 
    onClick={()=>{
    localStorage.setItem('view',props.id)
      
    }}>
 <div className='note'>
<h3>{props.title}</h3>
<hr/>
<p>{props.note} </p>

     </div>
    </div></Link>

    </>
    )
}
export default Note;
