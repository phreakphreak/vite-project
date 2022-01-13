const User = ({
  id,
  name,
  username,
  email,
  address: {
    street,
    suite,
    city,
    zipcode,
    geo: { lat, lng },
  },
  phone,
  website,
  company,
}) => {
  const fields = [
    username,
    email,
    phone,
    website,
    company?.name,
    street,
    zipcode,
    city,
    suite,
  ];
  return (
    <div>
      <a
        href="#"
        className="block p-6 rounded-3xl  bg-white hover:bg-gray-100 shadow-md border border-gray-200 max-w-sm"
      >
        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          {name}
        </h5>
        {fields.map((field, index) => (
          <p key={index} className="text-gray-700 text-sm">
            {field}
          </p>
        ))}
      </a>
    </div>
  );
};

export default User;
