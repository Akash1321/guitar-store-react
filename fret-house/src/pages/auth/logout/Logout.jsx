import {useNavigate} from "react-router-dom";

import "./Logout.css"

const Logout = () => {
    const navigate = useNavigate()
    return (
        <div className="container logout text-primary-400 logout-display">
        <h1 className="fs-heading fw-bold logout-text">You are logged out</h1>
        <button className="primary-button" onClick={() => navigate("/products")}>Go to Products</button>
        </div>
    )
}

export default Logout;