import {useAuth} from "../../context/AuthContext";

const Profile = () => {

    const {user, handleLogout} = useAuth();

    return(
        <>
        <h1 style={{fontWeight: "bold", fontSize: "4rem", marginTop: "8rem"}}>This is Profile Page</h1>
        <p>{user.firstName ?? user.name}</p>
        <button className="accent-button" onClick={handleLogout}>LOG OUT</button>
        </>
        
    )
}

export default Profile;