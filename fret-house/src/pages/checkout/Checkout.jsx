import {useState} from "react";

import {X, Plus} from "react-feather";
import { v4 as uuid } from "uuid";

import "./Checkout.css";
import {useData} from "../../context/DataContext";

const Checkout = () => {
    const {state, dispatch} = useData();

    const [addressToggle, setAddressToggle] = useState({addresses: false, form: false});
    const [orderDetails, setOrderDetails] = useState({
        productsOrdered: state.cartList,
        address: {}
    })

    const handleAllAddressesView = () => {
        setAddressToggle(prev => ({...prev, addresses: !prev.addresses}))
    }

    const handleAddressDelete = (selectedId) => {
        dispatch({type: "DELETE_ADDRESS", payload: selectedId})
        console.log(selectedId)
    }

    const handleAddressForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const userName = form.userName.value;
        const address = form.deliveryAddress.value;
        const city = form.city.value;
        const state = form.state.value;
        const pincode = form.pincode.value;
        const phoneNumber = form.number.value;
        console.log(userName, address, city, state, pincode, phoneNumber);
        dispatch({type: "ADD_ADDRESS", payload: {id: uuid(), userName, address, city, state, pincode, phoneNumber}})
    }

    const handleAddressSelected = (addressSelected) => {
        const address = state.addressList.find(({id}) => id === addressSelected)
        setOrderDetails(prev => ({...prev, address}))
        setAddressToggle({addresses: false, form: false})
    }

    const totalPrice = state.cartList?.reduce(
        (total, items) => Number(items.price) + total,
        0
      );

    const {id, userName, address, city, pincode, phoneNumber} = orderDetails.address;

    return (
        <main className="container checkout-container text-primary-400">
           <section  className="address-section">
            <div className="address-section-header">
              <h2 className="fs-heading fw-semiBold">Delivery Address</h2>
              <span className="select-address" onClick={handleAllAddressesView}>
                {addressToggle.addresses ? <X /> : "Select Address"}
                </span>
            </div>
            
            {addressToggle.addresses && <div>
                <ul className="address-container">
                {state?.addressList.map(address => (
                    <li key={address.id} className="addresses" onClick={() => handleAddressSelected(address.id)}>
                        <input type="radio" name="addressSelection" value={address.address} checked={address.id === orderDetails.address.id}/>
                        <div>
                        <h3 className="fw-semiBold">{address.userName}</h3>
                        <p>{address.address}, {address.city}, {address.state}, {address.pincode}</p> 
                        <p>phone: {address.phoneNumber}</p>
                        <p className="delete-address" onClick={() => handleAddressDelete(address.id)}>Delete</p>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="add-new" onClick={() => setAddressToggle(prev => ({...prev, form: true}))}><Plus /> Add new address </p>
            {addressToggle.form && <form className="login-form" onSubmit={handleAddressForm}>
                <X className="hide-addAddress" onClick={() => setAddressToggle(prev => ({...prev, form: false}))}/>
                <label className="field-labels">
                    <input type="text" name="userName" placeholder="Name" className="login-fields bg-accent-bg fw-regular"/>
                </label>

                <label className="field-labels">
                    <input type="text" name="deliveryAddress" placeholder="House no., street" className="login-fields bg-accent-bg fw-regular"/>   
                </label>

                <label className="field-labels">
                    <input type="text" name="city" placeholder="City" className="login-fields bg-accent-bg fw-regular"/>
                </label>

                <label className="field-labels">
                    <input type="text" name="state" placeholder="State" className="login-fields bg-accent-bg fw-regular"/>
                </label>

                <label className="field-labels">
                    <input type="text" name="pincode" placeholder="Pincode" className="login-fields bg-accent-bg fw-regular"/>
                </label>

                <label className="field-labels">
                    <input type="number" name="number" placeholder="Phone no." className="login-fields bg-accent-bg fw-regular"/>
                </label>

                <button className="primary-button">Add Address</button>

            </form>}
            {console.log(orderDetails)}
            </div>}

            {id ? <div className="addressSelected">
                <h3 className="fw-bold">{userName}</h3>
                <p>{address}, {city}, {orderDetails.address.state}</p>
                <p><span className="fw-semiBold text-primary-300">Pincode-</span> {pincode}</p>
                <p><span className="fw-semiBold text-primary-300">Phone no.-</span> {phoneNumber}</p>
                </div> : <p className="fw-bold no-address">No Address Selected</p>}
           </section>

           <section className="order-detail-section bg-neutral-400">
            <h2 className="fs-heading fw-semiBold od-heading">Order Details</h2>
            <div className="order-details">
                <p>Price</p>
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
           </section>
         
        </main>
    )
}

export default Checkout;


// {/* <h3>{address.name}</h3>
// <p>{address.address}</p> 
// <p>{address.city}, {address.state}, {address.pincode}</p>
// <p>phone: {address.number}</p> */}