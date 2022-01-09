import { useState,useEffect } from "react";
import Head from'./Head'
import pencil from'./img/edit.png'
import dl from'./img/delete.png'
import { Link } from "react-router-dom";
let View=()=>{
  let [data,setData]=useState([])
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
  }
  console.log(data)
  return(
    <>
<div className='view'>

<h3>{data.title}</h3>
<br/>
<hr/>
<div>  
<br/>
<p>{data.note}</p>
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