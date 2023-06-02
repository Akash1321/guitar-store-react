import {lazy, Suspense, useState} from "react";

import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import {useData} from "./context/DataContext";
import "./App.css";
import RequiresAuth from "./components/RequiresAuth";
import Nav from "./components/Nav/Nav";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Wishlist from "./pages/wishlist/Wishlist";
import Login from "./pages/auth/login/Login";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Profile from "./pages/profile/Profile";
import SignUp from "./pages/auth/signup/SignUp";
import Logout from "./pages/auth/logout/Logout";
import Checkout from "./pages/checkout/Checkout";
import Loader from "./components/loader/Loader";
import MobileSearch from "./components/Nav/mobileSearch/MobileSearch";
import OrderSuccess from "./pages/orderSuccess/OrderSuccess";

const Products = lazy(() => import ("./pages/products/Products"));

function App() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <div className="App">
     <Nav setMobileView={setMobileView}/> 
     {mobileView && <MobileSearch setMobileView={setMobileView}/>}
     <Suspense fallback={<Loader />}>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="mockman" element={<Mockman />} />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderSuccess" element={<OrderSuccess />} />
      </Routes>
     </Suspense>
      
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
