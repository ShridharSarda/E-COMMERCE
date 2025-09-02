import { Button, TextField } from '@mui/material';
import React from 'react';
import AdressCard from '../AdressCard/AdressCard';

const DeliveryAddressForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("address", Object.fromEntries(data));
  };

  return (
    <div className="w-full flex flex-col lg:flex-row gap-5 h-[30.5rem]">
      {/* LEFT SECTION */}
      <div className="w-full lg:max-w-[40%] border rounded-md shadow-md overflow-y-scroll">
        <div className="p-5 py-7 border-b cursor-pointer">
          <AdressCard />
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
