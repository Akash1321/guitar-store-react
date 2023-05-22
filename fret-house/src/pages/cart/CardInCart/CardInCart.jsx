import { Plus, Minus } from "react-feather";

import "./CardInCart.css"
import { useAuth } from "../../../context/AuthContext";
import { useData } from "../../../context/DataContext";

const CardInCart = (product) => {
    const { token } = useAuth();
  const {
    handleRemoveFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useData();

  const handlePlusQuantity = (selectedId) => {
    handleIncreaseQuantity(token, selectedId);
  };

  const handleMinusQuantity = (quantity, selectedId) => {
    if (quantity === 1) {
      handleRemoveFromCart(token, selectedId);
    } else {
      handleDecreaseQuantity(token, selectedId);
    }
  };

  const handleOnRemove = (id) => {
    handleRemoveFromCart(token, id);
  };
    const { _id, title, image, price, qty } = product;
    return(
        <li className="cartItems text-primary-400 bg-neutral-400">
                <div className="cartItem-image-container">
                  <img src={image} alt={title} className="cartItem-image"/>
                </div>

                <div className="cartItem-detail-container">
                  <h2 className="">{title}</h2>
                  <p className="fw-semiBold">₹ {price}</p>
                  <div className="quantity-area">
                  <h3>Quantity: </h3>
                  <div className="quantity-area">
                    <Minus className="quantity-icons" onClick={() => handleMinusQuantity(qty, _id)} />
                    <p>{qty}</p>
                    <Plus className="quantity-icons" onClick={() => handlePlusQuantity(_id)} />
                  </div>
                  </div>
                  
                  <button className="accent-button cartItem-button" onClick={() => handleOnRemove(_id)}>
                    Remove from cart
                  </button>
                </div>
              </li>
    )
}

export default CardInCart;