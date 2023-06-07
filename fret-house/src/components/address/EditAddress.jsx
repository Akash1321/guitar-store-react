import { X } from "react-feather";
import { toast } from "react-toastify";

import { useData } from "../../context/DataContext";
import {useOrder} from "../../context/OrderContext";

const EditAddress = ({ setAddressToggle, toEdit }) => {
  const {
    state: { addressList },
    dispatch,
  } = useData();
  const {addressSelected, dispatchOrder} = useOrder();

  const addressToChange = addressList.find(({ id }) => id === toEdit);

  const handleEditAddressForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const address = form.deliveryAddress.value;
    const city = form.city.value;
    const state = form.state.value;
    const pincode = form.pincode.value;
    const phoneNumber = form.number.value;

    const changedDetails = {
      userName,
      address,
      city,
      state,
      pincode,
      phoneNumber,
    };

    dispatch({ type: "EDIT_ADDRESS", payload: { toEdit, changedDetails } });
    setAddressToggle((prev) => ({ ...prev, editform: false }));
    toast.success("Address edited");

    if(addressSelected.id){
      dispatchOrder({type: "SELECT_ADDRESS", payload: addressSelected.id})
    }
  };

  const { userName, address, city, state, pincode, phoneNumber } =
    addressToChange;

  return (
    <form className="login-form" onSubmit={handleEditAddressForm}>
      <X
        className="hide-addAddress"
        onClick={() =>
          setAddressToggle((prev) => ({ ...prev, editform: false }))
        }
      />
      <label className="field-labels">
        <input
          type="text"
          name="userName"
          defaultValue={userName}
          placeholder="Name"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="deliveryAddress"
          defaultValue={address}
          placeholder="House no., street"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="city"
          defaultValue={city}
          placeholder="City"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="state"
          defaultValue={state}
          placeholder="State"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="pincode"
          defaultValue={pincode}
          placeholder="Pincode"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="number"
          name="number"
          defaultValue={phoneNumber}
          placeholder="Phone no."
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <button className="primary-button">Edit Address</button>
    </form>
  );
};

export default EditAddress;
