import {useState} from "react";

import {X, Plus} from "react-feather";

import "./Checkout.css";
import {useData} from "../../context/DataContext";
import AddAddress from "../../components/address/AddAddress";
import EditAddress from "../../components/address/EditAddress";

const Checkout = () => {
    const {state, dispatch} = useData();

    const [addressToggle, setAddressToggle] = useState({addresses: false, addform: false, editform: false});
    const [orderDetails, setOrderDetails] = useState({
        productsOrdered: state.cartList,
        address: {}
    });
    const [toEdit, setToEdit] = useState("");

    const handleAllAddressesView = () => {
        setAddressToggle(prev => ({...prev, addresses: !prev.addresses}))
    }

    const handleAddressDelete = (selectedId, e) => {
        e.stopPropagation()
        dispatch({type: "DELETE_ADDRESS", payload: selectedId});
    }

    const handleAddressSelected = (addressSelected) => {
        const address = state.addressList.find(({id}) => id === addressSelected)
        setOrderDetails(prev => ({...prev, address}))
        setAddressToggle({addresses: false, addform: false, editform: false})
    }

    const handleEditAddress = (selectedId, e) => {
        e.stopPropagation();
        setAddressToggle(prev => ({...prev, addform: false, editform: true}));
        setToEdit(selectedId)
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
                        <div className="edit-delete-container">
                        <p className="edit-delete edit-address" onClick={(e) => handleEditAddress(address.id, e)}>Edit</p>
                        <p className="edit-delete delete-address" onClick={(e) => handleAddressDelete(address.id, e)}>Delete</p>
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p className="add-new" onClick={() => setAddressToggle(prev => ({...prev, addform: true, editform: false}))}><Plus /> Add new address </p>
            {addressToggle.addform && <AddAddress setAddressToggle={setAddressToggle}/>}
            {addressToggle.editform && <EditAddress setAddressToggle={setAddressToggle} toEdit={toEdit}/>}
    
            </div>}

            {id ? <div className="addressSelected">
                <h3 className="fw-bold">{userName}</h3>
                <p>{address}, {city}, {orderDetails.address.state}</p>
                <p><span className="fw-semiBold text-primary-300">Pincode-</span> {pincode}</p>
                <p><span className="fw-semiBold text-primary-300">Phone no.-</span> {phoneNumber}</p>
                </div> : <p className="fw-bold no-address">No Address Selected</p>}
           </section>

           <section className="order-detail-section bg-neutral-400">
            <div className="order-detail-container">
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
            </div>
           </section>
         
        </main>
    )
}

export default Checkout;

