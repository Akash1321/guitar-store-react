import {createContext, useContext, useState}  from "react";

import {useNavigate, useLocation} from "react-router-dom";


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
    const location = useLocation();

    const localStorageToken = JSON.parse(localStorage.getItem("authDetails"))
    const [token, setToken] = useState(localStorageToken?.token);
    const [user, setUser] = useState(localStorageToken?.user);


    const handleLogin = async (email, password) => {

       try{
        const response = await userLogin(email, password);
        console.log(response)

        const { foundUser, encodedToken } = await response.json()

        if(encodedToken){
            localStorage.setItem("authDetails", JSON.stringify({ user: foundUser, token: encodedToken }));
            setUser(foundUser)
            setToken(encodedToken)
            navigate(location?.state?.from?.pathname);
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
                navigate("/products")
            }

            
        }catch(err){
            console.log(err)
        }
    }


    const handleLogout = () => {
        localStorage.removeItem("authDetails");
        setToken(null);
        setUser(null);
        navigate("/")
    }



    console.log(user)
    console.log(token)

    


    return (
    <AuthContext.Provider value={{user, token, handleLogin, handleSignUp ,handleLogout}}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);