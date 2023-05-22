import {useNavigate} from "react-router-dom";

import {useAuth} from "../../../context/AuthContext";

const SignUp = () => {
    const navigate = useNavigate();
    const {handleSignUp} = useAuth();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form  = e.target
        const name = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;
        handleSignUp(name, email, password);
    }

    return(
        <div style={{marginTop: "8rem"}}>
            <h1 style={{fontWeight: 'bold', fontSize: "24px" }}>This is signUp page</h1>

            <form onSubmit={handleOnSubmit}>
            <label>Name: <input type="text" name="userName" required/></label>
            <label>Email: <input type="text" name="email" required/></label>
            <label>Password: <input type="password" name="password" required/></label>
            <label>confirm password: <input type="password" required/></label>

            <button>Sign up</button>
        </form>
        <button onClick={() => navigate("/login")}> Login </button>
        </div>
    )
};

export default SignUp;