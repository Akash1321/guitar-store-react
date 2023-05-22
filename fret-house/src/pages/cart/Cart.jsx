import "./Cart.css";
import { useData } from "../../context/DataContext";
import CardInCart from "./CardInCart/CardInCart";

const Cart = () => {
  const { state } = useData();

  const totalPrice = state.cartList?.reduce(
    (total, items) => Number(items.price) + total,
    0
  );
  return state.cartList.length === 0 ? (
    <div className="container cart-container">
      <h1>No items add to card</h1>
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

      <section class="cartDetails-section text-primary-400">
        <h2 className="fs-heading fw-semiBold">Cart Details</h2>
        <table className="text-primary-400" >
          <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
          </thead>

          <tbody className="body">
          {state.cartList?.map(({ _id, price, title, qty }) => (
                <tr key={_id}>
                  <td className="cartItemsTitle fw-semiBold text-primary-300">{title} (X {qty})</td>
                  <td className="cartItemsPrice fw-semiBold text-primary-300">₹ {price}</td>
                </tr>
              ))}
          </tbody>
        
            <tr className="table-footer">
              <td className="fw-semiBold">TOTAL PRICE </td>
              <td className="fw-semiBold">₹ {totalPrice}</td>
            </tr>
          
          
        </table>

        <button className="primary-button">CHECKOUT</button>
      </section>
    </div>
  );
};

export default Cart;
