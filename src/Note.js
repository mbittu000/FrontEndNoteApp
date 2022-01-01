import { Link,Routes,
  Route } from "react-router-dom";
import View from'./View'
let Note=(props)=>{

  return(
    <>
   <Link to='/view'> <div className='notediv' 
    onClick={()=>{alert(props.id)}}>
 <div className='note'>
<h3>{props.title}</h3>
<hr/>
<p>{props.note} </p>
     </div>
    </div></Link>
     
    </>
    )
}
export default Note