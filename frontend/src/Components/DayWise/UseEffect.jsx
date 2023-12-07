import { useEffect, useState} from "react";
function UseEffect(){

    const [counter, setCounter] = useState(0);
    
    function Increment(){
        setCounter((prevState) => prevState + 1)
    }

    useEffect(() => {
        alert("This is Use Effect.......")
    });

    return(
        <div>
            <h1>Use Effect</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={Increment}>+</button>
        </div>
    )

}
export default UseEffect;