
import {React,useState,useEffect  } from 'react';
import { Button, TextField } from '@mui/material';
import AdressCard from '../AdressCard/AdressCard';
import { useDispatch } from 'react-redux';
import {createOrder} from "../../../State/Order/Action"
import { useNavigate } from 'react-router-dom';

const DeliveryAddressForm = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();


  //add
    const [savedAddress, setSavedAddress] = useState(null);
  useEffect(() => {
    const addressFromStorage = JSON.parse(localStorage.getItem('shippingAddress'));
    if (addressFromStorage) setSavedAddress(addressFromStorage);
  }, []);




  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const address = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    streetAddress: data.get("address"),
    city: data.get("city"),
    state: data.get("state"),
    zipCode: data.get("zip"),
    mobile: data.get("phoneNumber"),
};

   //add

    localStorage.setItem('shippingAddress', JSON.stringify(address));
    setSavedAddress(address); // update state to render AdressCard





  //  const savedAddress = JSON.parse(localStorage.getItem("shippingAddress"));
     const orderData={address,navigate}
    dispatch(createOrder(orderData));
  //add
 navigate("/checkout?step=3&order_id=YOUR_ORDER_ID");
  };
 
  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 h-[30.5rem]">
      {/* LEFT SECTION */}
      <div className="w-full lg:max-w-[40%] border rounded-md shadow-md overflow-y-scroll">
        <div className="p-5 py-7 border-b cursor-pointer">
<AdressCard address={savedAddress}/>
          <Button
            sx={{ mt: 2, bgcolor: 'RGB(145 85 253)' }}
            size="large"
            variant="contained"
          >
            Deliver Here
          </Button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full flex-1 border rounded-md shadow-md p-5 overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              fullWidth
              autoComplete="given-name"
              multiline
              rows={4}
              className="md:col-span-2"
            />
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="state"
              name="state"
              label="State/Province/Region"
              fullWidth
              autoComplete="given-name"
            />
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal Code"
              fullWidth
              autoComplete="shipping postal-code"
            />
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="given-name"
            />
          </div>
<Button
            sx={{py:1.5, mt: 3, bgcolor: 'RGB(145 85 253)' }}
            size="large"
            variant="contained"
            type="submit"
          >
            Save & Continue
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;
