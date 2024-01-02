import { useContext } from "react";
import Navbar from "./Navbar";
import toast from "react-hot-toast"
import { MyContext } from "../../Context/AuthContext";

function Home(){

    const { state, dispatch } = useContext(MyContext);


    return(
        <div>
            <h1>Home Page - AuthContext - {state.user?.name}</h1> 
            <button onClick={() => toast.success("Success")}>Success</button>
            <button onClick={() => toast.error("Error")}>Error</button>
        </div>
    )

}
export default Home;

//  <h1>Home Page - AuthContext - {state.test}</h1> 