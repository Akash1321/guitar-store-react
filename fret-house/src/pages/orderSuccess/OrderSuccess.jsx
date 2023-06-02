import {useNavigate} from "react-router-dom";

import {useOrder} from "../../context/OrderContext";
import "./OrderSuccess.css"

const OrderSuccess = () => {
    const {orderList} = useOrder();
    const navigate = useNavigate();

    const {orderDetail, deliveryAddress, orderedItems} = orderList[orderList.length - 1];

    const {orderId, amountPaid} = orderDetail;
    const {address, city, pincode, phoneNumber} = deliveryAddress;

    return (
        <div className="container order-success-container">
            <h1 className="text-accent-green fs-heading fw-bold success-head">Order Placed</h1>
            <h2 className="fs-500 fw-semiBold text-primary-300">Order Summary</h2>
            <div className="text-primary-400 summary-details">
                <p><span className="fw-semiBold">OrderId:</span> {orderId}</p>
                <p><span className="fw-semiBold">Amount paid:</span> ₹ {amountPaid}</p>
                <p><span className="fw-semiBold">Address:</span> {address}, {city}, {pincode}</p>
                <p><span className="fw-semiBold">Phone:</span> {phoneNumber}</p>
            </div>
            <ul className="ordered-list text-primary-400 bg-neutral-400">
                {orderedItems.map(({image, price, qty, title}) => (
                    <li className="ordered-item">
                        <img src={image} alt={title} className="ordered-item-image"/>
                        <div className="order-item-details">
                        <p>{title}</p>
                        <p>Price: ₹ {price}</p>
                        <p>Quantity: {qty} </p>
                        </div>
                        
                    </li>
                ))}
            </ul>

            <button className="primary-button" onClick={() => navigate("/")}>Go to Home</button>
        </div>
    )
};

export default OrderSuccess;