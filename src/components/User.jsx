const User = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  const fields = [username, email, phone, website, company?.name];
  console.log(fields);
  return (
    <div>
      <a
        href="#"
        className="block p-6 bg-white hover:bg-gray-100 shadow-md border border-gray-200 rounded-lg max-w-sm"
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
