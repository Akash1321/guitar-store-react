import { X } from "react-feather";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import { useData } from "../../context/DataContext";

const AddAddress = ({ setAddressToggle }) => {
  const { dispatch } = useData();

  const handleAddressForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const address = form.deliveryAddress.value;
    const city = form.city.value;
    const state = form.state.value;
    const pincode = form.pincode.value;
    const phoneNumber = form.number.value;

    dispatch({
      type: "ADD_ADDRESS",
      payload: {
        id: uuid(),
        userName,
        address,
        city,
        state,
        pincode,
        phoneNumber,
      },
    });

    setAddressToggle((prev) => ({ ...prev, addform: false }));
    toast.success("Address Added");
  };

  return (
    <form className="login-form" onSubmit={handleAddressForm}>
      <X
        className="hide-addAddress"
        onClick={() =>
          setAddressToggle((prev) => ({ ...prev, addform: false }))
        }
      />
      <label className="field-labels">
        <input
          type="text"
          name="userName"
          placeholder="Name"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="deliveryAddress"
          placeholder="House no., street"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="city"
          placeholder="City"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="state"
          placeholder="State"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <label className="field-labels">
        <input
          type="number"
          name="number"
          placeholder="Phone no."
          className="login-fields bg-accent-bg fw-regular"
        />
      </label>

      <button className="primary-button">Add Address</button>
    </form>
  );
};

export default AddAddress;
