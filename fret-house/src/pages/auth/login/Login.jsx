import {useAuth} from "../../../context/AuthContext";
import {Link} from "react-router-dom";

const Login = () => {

    const {handleLogin} = useAuth()

    const handleGuestLogin = () => {
        handleLogin("adarshbalika@gmail.com", "adarshbalika")
    }
    return (
        <div style={{marginTop: "8rem"}}>
        <h2 >I am confused</h2>

        <form>
            <label>Email: <input type="text" required/></label>
            <label>Password: <input type="password" required/></label>

            <button>LOGIN</button>
            <button onClick={handleGuestLogin}>LOGIN AS GUEST</button>
        </form>
        <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Login;