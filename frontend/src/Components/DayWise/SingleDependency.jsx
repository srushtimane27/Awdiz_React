import { useEffect, useState } from "react";

function SingleDependency(){
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(5);

    function Increment(){
        setCounter((preValue) => preValue + 1)
    }

    function Increment2(){
        setCounter2((preValue) => preValue + 1)
    }

useEffect(() => {
    alert("This is useCase type two - single dependency")
}, [counter])

return(
    <div>
        <h1>UseEffectTypeThree</h1>
        <h1>Counter: {counter}</h1>
        <button onClick={Increment}>+</button>
        <h1>Counter : {counter2}</h1>
        <button onClick={Increment}>+</button>
    </div>
)
}

export default SingleDependency;