import {useState} from "react";

import {X, Plus} from "react-feather";

import "./Checkout.css";
import {useData} from "../../context/DataContext";
import {useOrder} from "../../context/OrderContext";
import AddAddress from "../../components/address/AddAddress";
import EditAddress from "../../components/address/EditAddress";
import AddressOptions from "../../components/address/AddressOptions";

const Checkout = () => {
    const {state: {cartList}} = useData();
    const {addressSelected} = useOrder();

    const [addressToggle, setAddressToggle] = useState({addresses: false, addform: false, editform: false});
    const [toEdit, setToEdit] = useState("");

    const handleAllAddressesView = () => {
        setAddressToggle(prev => ({...prev, addresses: !prev.addresses}))
    }

    const {totalPrice, totalItem} = cartList?.reduce((totals, item) => {
       
        totals.totalPrice = Number(item.price) + totals.totalPrice;
        totals.totalItem = item.qty + totals.totalItem;

        return totals;
    }, {totalPrice: 0, totalItem: 0})


    const {id, userName, address, city, pincode, phoneNumber} = addressSelected;

    return (
        <main className="container checkout-container text-primary-400">
           <section  className="address-section">
            <div className="address-section-header">
              <h2 className="fs-heading fw-semiBold">Delivery Address</h2>
              <span className="select-address" onClick={handleAllAddressesView}>
                {addressToggle.addresses ? <X /> : "Add Address"}
                </span>
            </div>
            
            {addressToggle.addresses && <div>
            <AddressOptions setAddressToggle={setAddressToggle} setToEdit={setToEdit} />
            <p className="add-new" onClick={() => setAddressToggle(prev => ({...prev, addform: true, editform: false}))}><Plus /> Add new address </p>
            {addressToggle.addform && <AddAddress setAddressToggle={setAddressToggle}/>}
            {addressToggle.editform && <EditAddress setAddressToggle={setAddressToggle} toEdit={toEdit}/>}
    
            </div>}

            {id ? <div className="addressSelected">
                <h3 className="fw-bold">{userName}</h3>
                <p>{address}, {city}, {addressSelected.state}</p>
                <p><span className="fw-semiBold text-primary-300">Pincode-</span> {pincode}</p>
                <p><span className="fw-semiBold text-primary-300">Phone no.-</span> {phoneNumber}</p>
                </div> : <p className="fw-bold no-address">No Address Selected</p>}
           </section>

           <section className="order-detail-section bg-neutral-400">
            <div className="order-detail-container">
            <h2 className="fs-heading fw-semiBold od-heading">Order Details</h2>
            <div className="order-details">
                <p>Price({totalItem} item)</p>
                <p>₹ {totalPrice}</p>
            </div>
            <div className="order-details">
                <p>Delivery Charges</p>
                <p>{totalPrice > 1000 ? "Free" : 100}</p>
            </div>
            <p className="text-primary-300 fd-instruction">Free Delivery for orders above 1000</p>
            <hr />
            <div className="order-details final-price">
                <p className="fw-semiBold">Total Price</p>
                <p>₹ {totalPrice < 1000 ? totalPrice + 100 : totalPrice}</p>
            </div>
            <button className="primary-button">Place Order</button>
            </div>
           </section>
         
        </main>
    )
}

export default Checkout;

