import {useState,useEffect} from'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
let Edit=()=>{
  let [title,setTitle]=useState('')
  let [note,setNote]=useState('')
  let [obj,setObj]=useState()
  let uri=`https://business-note.herokuapp.com/set/note`
 let history = useNavigate(); 
  async function sub() {
 
fetch(uri,{
    method: "POST",
  headers: {'Content-Type':'application/json'},
    body:JSON.stringify({"title":title,
      "note":note
    })
})
.then(function(res){ return res.json(); })
.then(function(data){ console.log(data)})
localStorage.setItem('note',title)
history("/")
    
  }
  
  return(
    <>
    <center>


<textarea id='txtNote' className='txtnote' name="note" rows="3" cols="48" placeholder='Note' value={title}   onChange={(e)=>{setTitle(e.target.value)}} 
></textarea>
<textarea id='txtNote' className='txtnote' name="note" rows="40" cols="48" placeholder='Note' value={note}  onChange={(e)=>{setNote(e.target.value)}}
>
</textarea>

<button className='sub' onClick={sub}>Submit</button>

</center>

    </>
    )
}
export default Edit