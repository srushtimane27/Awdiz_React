import { useState } from "react"

function ChildrenComponent({ ChangeValue }) {

    return (
        <input onChange={ChangeValue} />
    )
}

function ChildToParent() {  
    const [myValue, setMyValue] = useState('')
    function ChangeValue(e) {
        setMyValue(e.target.value)
    }

    return (
        <div>
            <h1>Typed value : {myValue}</h1>
            <ChildrenComponent ChangeValue={ChangeValue} /> 
        </div>
    )
}

export default ChildToParent