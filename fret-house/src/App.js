import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";

// import {useData} from "./context/DataContext";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/auth/login/Login";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="mockman" element={<Mockman />}/>
      </Routes>
    </div>
  );
}

export default App;
