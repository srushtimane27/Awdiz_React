import { useState } from "react";
import { useNavigate } from "react-router-dom"

const DynamicRouting = () => {
    const router = useNavigate();
    const [myAge, setMyAge] = useState(40)


    return(
        <div>
            <h1>Dynamic Routing</h1>
            <button onClick={() => router(`/use-params/${myAge}`)}>Routing</button>
        </div>
    )
}

export default DynamicRouting;