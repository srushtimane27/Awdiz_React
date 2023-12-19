import Navbar from "./Navbar";
import toast from "react-hot-toast"

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <button onClick={() => toast.success("Success")}>Success</button>
            <button onClick={() => toast.error("Error")}>Error</button>
        </div>
    )

}
export default Home;