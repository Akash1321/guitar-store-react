import {useNavigate} from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="container page-not-found text-primary-400">
            <div>
            <h1 className="fs-heading fw-bold">404</h1>
            <p className="fs-500">Page Not Found</p>
            </div>
            <button className="primary-button back-to-home" onClick={() => navigate("/")}>Go to Home</button>
        </div>
    )
}

export default PageNotFound;