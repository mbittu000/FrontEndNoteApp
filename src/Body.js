import pencil from'./img/edit.png'
import Note from'./Note'
import { Link } from "react-router-dom";
import {useState,useEffect} from'react'
let Body=()=>{
let [data,setData]=useState([])
let uri=`https://business-note.herokuapp.com/get/note`
useEffect(()=>{
  async function call(){
    let fc=await fetch(uri)
    let fet=await fc.json()
    setData(fet)
  }
  call()
},[uri])

console.log(data)
  return(
    <>
 <div className='body'>
 <br/>
 {data.map((e)=>{
   return  <Note id={e._id} key={e._id} title={e.title} note={e.note}/>
 })

 }
 <div className='pendiv'>

<Link to='/edit' className='link'> <img src={pencil} alt='pencil' className='pencil'/></Link>
 </div>
    </div>
    </>
    )
}
export default Body