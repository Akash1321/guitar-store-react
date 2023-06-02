import { useData } from "../../context/DataContext";
import { useOrder } from "../../context/OrderContext";

const AddressOptions = ({ setAddressToggle, setToEdit }) => {
  const {
    state: { addressList },
    dispatch,
  } = useData();

  const { dispatchOrder, addressSelected } = useOrder();

  const handleEditAddress = (selectedId) => {
    setAddressToggle((prev) => ({ ...prev, addform: false, editform: true }));
    setToEdit(selectedId);
  };

  const handleAddressDelete = (selectedId) => {
    dispatch({ type: "DELETE_ADDRESS", payload: selectedId });
  };

  const handleAddressSelected = (addressSelected) => {
    dispatchOrder({ type: "SELECT_ADDRESS", payload: addressSelected });
    setAddressToggle({ addresses: false, addform: false, editform: false });
  };

  return (
    <ul className="address-container">
      {addressList.map((address) => (
        <li key={address.id} className="addresses">
          <input
            type="radio"
            name="addressSelection"
            value={address.address}
            checked={address.id === addressSelected.id}
            onChange={() => handleAddressSelected(address)}
            className="select-address-radio"
          />
          <div>
            <h3 className="fw-semiBold">{address.userName}</h3>
            <p>
              {address.address}, {address.city}, {address.state},{" "}
              {address.pincode}
            </p>
            <p>phone: {address.phoneNumber}</p>
            <div className="edit-delete-container">
              <p
                className="edit-delete edit-address"
                onClick={() => handleEditAddress(address.id)}
              >
                Edit
              </p>
              <p
                className="edit-delete delete-address"
                onClick={() => handleAddressDelete(address.id)}
              >
                Delete
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AddressOptions;
