import {X} from "react-feather";
import SearchBox from "../../search/SearchBox";
import "./MobileSearch.css"

const MobileSearch = ({setMobileView}) => {
    return (
        <div className="bg-accent-bg mobile-form">
            <X className="cancel-mobile-search" onClick={() => setMobileView(false)} />
            <SearchBox view="mobile-search-form" setMobileView={setMobileView} mobile/>
        </div>
    )
}

export default MobileSearch;