import React, { useState } from 'react'

const Js = () => {
    const[showText, setShowText] = useState(false)

    function Update(){
        setShowText(!showText)
    }

  return (
    <div>
        <button onClick={Update}>Click</button>
        {showText ? <div>true</div> : <div>False</div> }
        {/* {showText && <p>Show text</p>}  */}
    </div>
  )
}

export default Js