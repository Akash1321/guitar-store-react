import {createContext, useContext, useState}  from "react";

import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const AuthContext = createContext();

const userLogin = (email, password) => {
    return fetch("/api/auth/login", {
        method: "POST",

        body: JSON.stringify({
            email: email,
            password: password
        })
    })
}

const userSignUp = (name, email, password) => {
    return fetch("/api/auth/signup", {
        method: "POST",

        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    })
}

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();

    const localStorageToken = JSON.parse(localStorage.getItem("authDetails"))
    const [token, setToken] = useState(localStorageToken?.token);
    const [user, setUser] = useState(localStorageToken?.user);


    const handleLogin = async (email, password) => {

       try{
        const response = await userLogin(email, password);

        const { foundUser, encodedToken } = await response.json()

        if(encodedToken){
            localStorage.setItem("authDetails", JSON.stringify({ user: foundUser, token: encodedToken }));
            setUser(foundUser)
            setToken(encodedToken)
            toast.success("Login successful");
            navigate("/products");
        }

       }catch(error){
        console.log(error)
       }
    }


    const handleSignUp = async (name, email, password) => {
        try{
            const response = await userSignUp(name, email, password);
            
            if(response.ok){
                const {createdUser, encodedToken} = await response.json();

                localStorage.setItem("authDetails", JSON.stringify({user: createdUser, token: encodedToken}));
                setUser(createdUser);
                setToken(encodedToken);
                navigate("/products");
                toast.success("Sign up successful");
            }

            
        }catch(err){
            console.log(err)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("authDetails");
        setToken(null);
        setUser(null);
        navigate("/logout");
        toast.warn("you are logged out");
    }

    return (
    <AuthContext.Provider value={{user, token, handleLogin, handleSignUp ,handleLogout}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);