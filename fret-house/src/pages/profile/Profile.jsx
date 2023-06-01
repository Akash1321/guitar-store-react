import {useAuth} from "../../context/AuthContext";
import "./Profile.css";

const Profile = () => {

    const {user, handleLogout} = useAuth();

    return(
        <div className="container profile-container text-primary-400">
        <h1 className="fs-heading fw-bold ">Profile</h1>
        <div className="user-detail">
        <p><span className="fw-semiBold">Name:</span> {user.firstName ?? user.name} {user.lastName}</p>
        <p><span className="fw-semiBold">Email:</span> {user.email} </p>
        </div>
        
        <button className="accent-button logout-button" onClick={handleLogout}>LOG OUT</button>
        </div>
        
    )
}

export default Profile;