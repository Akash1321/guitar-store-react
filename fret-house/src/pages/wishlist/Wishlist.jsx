// import "./Products.css"
import {useData} from "../../context/DataContext";
import ProductCard from "../../components/productCard/ProductCard";

const Wishlist = () => {
    const {state} = useData();

    return (
        <main className="container products-container">
    
          <header className="section-header">
             <h1 className="fs-heading fw-bold products-heading">All Products</h1>
          </header>
    
          <ul className="product-list">
            {state?.wishList.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ul>
        </main>
      );
}

export default Wishlist;