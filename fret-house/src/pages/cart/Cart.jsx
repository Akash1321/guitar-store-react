import { useNavigate } from "react-router-dom";

import "./Cart.css";
import { useData } from "../../context/DataContext";
import CardInCart from "./CardInCart/CardInCart";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useData();

  const totalPrice = state.cartList?.reduce(
    (total, items) => Number(items.price) + total,
    0
  );

  return state.cartList.length === 0 ? (
    <div className="container cart-container">
      <div className="empty-list">
        <p className="fw-semiBold text-primary-400 fs-heading">No items added to cart</p>
        <button className="primary-button explore-button" onClick={() => navigate("/products")}>Explore Products</button>
      </div>
    </div>
  ) : (
    <div className="container cart-container">
      <section className="cartItems-section">
        <ul className="cartItems-container">
          {state.cartList?.map((product) => (
            <CardInCart {...product} key={product._id} />
          ))}
        </ul>
      </section>

      <section className="cartDetails-section text-primary-400">
        <h2 className="fs-heading fw-semiBold">Cart Price Details</h2>
        <div className="text-primary-400 detail-body">
          <div className="detail-headings fw-semiBold">
            <p>Product</p>
            <p>Price</p>
          </div>
          <hr />
          <div className="items-body">
            {state.cartList?.map(({ _id, price, title, qty }) => (
              <div key={_id} className="items">
                <p className="cartItemsTitle">
                  {title} <span className="fw-semiBold">(X {qty})</span>
                </p>
                <p className="cartItemsPrice">₹ {price}</p>
              </div>
            ))}
          </div>
          <hr />
          <div className="detail-summary">
            <p className="fw-semiBold">TOTAL PRICE </p>
            <p className="fw-semiBold">₹ {totalPrice}</p>
          </div>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("/checkout")}
        >
          PROCEED TO CHECKOUT
        </button>
      </section>
    </div>
  );
};

export default Cart;
