import { useState,useEffect } from "react";
import Head from'./Head'
import pencil from'./img/edit.png'
import dl from'./img/delete.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let View=()=>{
  let [data,setData]=useState([])
  let his=useNavigate()
  useEffect(()=>{
   async function call() {
    let obj=localStorage.getItem('view');
    let uri=`https://business-note.herokuapp.com/find/note/${obj}`
    let fc=await fetch(uri)
    console.log(obj)
   let fo=await fc.json()
   setData(fo)
    }
    call()
  },[])
  let del=async()=>{
    let obj=localStorage.getItem('view');
    let uri=`https://business-note.herokuapp.com/rm/note/${obj}`
  fetch(uri, {
  method: 'DELETE',
})
.then(res => res.json()) 
.then(res => console.log(res))
//  console.log(fo)
his('/')
  }
  
  console.log(window.history)
  console.log(data)
  return(
    <>
<div className='view'>

<textarea id='txtNote' className='txtnote' name="note" rows="3" cols="46"
readOnly={true} value={data.title}
></textarea>
<center>
<hr className='hrp'/>
</center>
<div>  
<textarea id='txtNote' className='txtnote' name="note" rows="48" cols="46" 
readOnly={true} value={data.note}
></textarea>
</div>

 <div className='pendiv'>
<Link to='/write'> <img src={pencil} alt='pencil' className='pencil'/></Link>
<img src={dl} className='dl' onClick={del}/>
</div>
  </div>  
    </>
    )
}
export default View