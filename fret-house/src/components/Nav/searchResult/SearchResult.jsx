import {useNavigate} from "react-router-dom";

import "./SearchResult.css";

import {useData} from "../../../context/DataContext"
const SearchResult = ({searchInput, setSearchInput}) => {
    const navigate = useNavigate();
    const {state: {products}} = useData();

    const searchedProducts = products.filter(({title}) => title.toLowerCase().includes(searchInput.toLowerCase()));

    const handleSearchNavigate = (id) => {
        navigate(`/products/${id}`);
        setSearchInput("");
    }

    return (
        <>
        {searchInput && <div className="search-result-container text-primary-400">
        <ul className="search-results">
            {searchedProducts.map(({_id, title, image, price}) => (
                <li className="result-list" onClick={() => handleSearchNavigate(_id)}>
                    <div className="search-image-container">
                    <img src={image} alt={title} className="search-image"/>
                    </div>
                    <div className="search-details">
                    <h2 className="fw-semiBold">{title}</h2>
                    <p>₹ {price}</p>
                    </div>
                </li>
            ))}
        </ul>

    </div>}
        </>
    )
}

export default SearchResult;