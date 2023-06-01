import {useNavigate} from "react-router-dom";

import "./SearchResult.css";

import {useData} from "../../../context/DataContext";
import {useFilter} from "../../../context/FilterContext";

const SearchResult = ({searchInput, setSearchInput, setMobileView ,mobile}) => {
    const navigate = useNavigate();
    const {state: {products}} = useData();
    const {filterProduct} = useFilter();

    const searchedProducts = products.filter(({title}) => title.toLowerCase().includes(searchInput.toLowerCase()));

    const handleSearchNavigate = (id) => {
        navigate(`/products/${id}`);
        setSearchInput("");
        filterProduct({ type: "SEARCH_PRODUCTS", payload: "" });

        if(mobile){
            setMobileView(false);
        }

    }

    return (
        <>
        {searchInput && <div className={`search-result-container text-primary-400 ${mobile ? `mobile` : `other-devices`}`}>
        <ul className="search-results">
            {searchedProducts.map(({_id, title, image, price}) => (
                <li className="result-list" key={_id} onClick={() => handleSearchNavigate(_id)}>
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