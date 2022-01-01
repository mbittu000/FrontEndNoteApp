import search from'./img/search.png'
import {useState} from'react'
let Head=()=>{
  let [show,setShow]=useState(false)
  let hide=()=>{
    setShow(!show)
  }
  return(
    <>
    <div className='head'>
    <br/>
    <div className='logo'>
    <h3><span className='b'> <br/>Business</span><span className='n'>Note</span><br/></h3>
    <div className='searchdiv'>
    <img src={search} onClick={hide} alt='search' className='search'/>
    </div>
  </div>
  <center>
  {show?
  <input type='text' className='input' placeholder='Search'/>:''
  }
  </center>
    </div>
    </>
    )
}
export default Head