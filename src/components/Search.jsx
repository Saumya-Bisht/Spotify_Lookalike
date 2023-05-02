import React ,{useState,useEffect}from 'react'


function Search() {
  // const [searchQuery, setSearchQuery] = useState('');
  const[button,setButton]=useState([]);

  const show=()=>{
    return setButton(<div>
        <h1>hiii</h1>
    </div>)
  }
  const clear=()=>{
    return setButton([])
  }
  return (
    <div  style={{}}>
        <h1>Search component</h1>
        <input style={{width:"30vw",height:"30px",borderRadius:"20px",border:"0"}} type='text' placeholder=' 🔍 What do you want to listen to!?'/>
        <button style={{backgroundColor:"white",border:"1px solid white",marginLeft:"5px",fontWeight:"bold",cursor:"pointer"}} onClick={show}>Search</button>
        <button style={{backgroundColor:"white",border:"1px solid white",marginLeft:"5px",fontWeight:"bold",cursor:"pointer"}} onClick={clear}>Clear</button>
        <div>
           {button}
        </div>
    </div>
  )
}

export default Search