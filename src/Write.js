import {useState,useEffect} from'react'
import { useNavigate } from "react-router-dom";
let Edit=()=>{
  let [title,setTitle]=useState('')
  let [note,setNote]=useState('')
  let [obj,setObj]=useState()
  let rew=localStorage.getItem('view');
  let uri=`https://business-note.herokuapp.com/edit/note/${rew}`
  let his=useNavigate()
    useEffect(()=>{
   async function call() {
    let re=localStorage.getItem('view');
    let url=`https://business-note.herokuapp.com/find/note/${re}`
    let fc=await fetch(url)
   let fo=await fc.json()
   console.log(fo)
   setTitle(fo.title)
   setNote(fo.note)
//let def=document.getElementById('def').value=fo.title;
//let ndof=document.getElementById('ndof').defaultValue=fo.note
    }
    call()
    },[])
  async function sub() {
   // let re=localStorage.getItem('view');
fetch(uri,{
    method: "PATCH",
  headers: {'Content-Type':'application/json'},
    body:JSON.stringify({
    title:title,
    note:note
    })
})
.then(function(res){ return res.json(); })
.then(function(data){ console.log(data)})
console.log(title,note)
his('/view')
  }
  
  return(
    <>
    <center>


<textarea id='txtNote' className='txtnote' name="note" rows="3" cols="48" placeholder='Note' value={title}  id='def' onChange={(e)=>{setTitle(e.target.value)}} 
></textarea>
<textarea id='txtNote' className='txtnote' name="note" rows="40" id='ndof' cols="48" placeholder='Note' value={note}  onChange={(e)=>{setNote(e.target.value)}}
>
</textarea>
<button className='sub' onClick={sub}>Submit</button>
</center>


    </>
    )
}
export default Edit