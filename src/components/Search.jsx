const Search = ({ onSearch, searchTerm }) => {
  const handleChange = (event) => {
    onSearch(event);
  };

  return (
    <div className="flex flex-col  max-w-md my-0 mx-auto p-6 rounded-xl bg-white shadow-xl">
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700 p-2 m-0"
      >
        Search
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="search"
        id="search"
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md m-1"
        placeholder="Search"
        value={searchTerm}
      />
      {/* <p className="block text-sm font-medium text-gray-700 p-2 m-0">
        Searching for : <strong>{searchTerm}</strong>
      </p> */}
    </div>
  );
};

export default Search;
