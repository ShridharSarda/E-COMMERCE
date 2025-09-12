const AdressCard = ({ address }) => {
  if (!address) return <p>No address selected</p>;

  return (
    <div className="space-y-3">
      <p className="font-semibold">{address.firstName} {address.lastName}</p>
      <p>{address.streetAddress}, {address.city}, {address.zipCode}</p>
      <p>Phone: {address.mobile}</p>
    </div>
  );
};

export default AdressCard;
