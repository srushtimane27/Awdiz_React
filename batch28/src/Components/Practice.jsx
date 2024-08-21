
import { useRef, useState } from "react";

function Practice(){
  const refElement = useRef("");
  const [name, setName] = useState("SRUSHTI")
  function Reset(){
    setName("")
    refElement.current.focus()
  }
  function handleInput(){
    refElement.current.style.color="red";
    refElement.current.value="HeyHi";
  }
  return(
    <div>
       <h1>useRef</h1>
       <input ref={refElement} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
       <button onClick={Reset}>Reset</button>
       <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}
export default Practice;