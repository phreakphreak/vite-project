import { useState } from "react";
import "./App.css";
import List from "./components/List";
import PriceInput from "./components/PriceInput"; // eslint-disable-line
import Search from "./components/Search";
import { useFetch } from "./hooks/useFetch";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, error, loading } = useFetch(USERS_URL);

  if (error) {
    console.log(error);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex flex-col  bg-slate-400 p-6">
      <div className="p-6">
        <Search onSearch={handleSearch} />
      </div>
      <span className="flex flex-col max-w-md my-0 mx-auto ">
        {searchTerm && (
          <p className="block text-2xl font-medium text-white p-2">
            Searching for : <strong>{searchTerm}</strong>
          </p>
        )}
      </span>
      <div className="py-6">
        {loading && <div>Loading...</div>}
        {data && <List users={data} searchTerm={searchTerm} />}
      </div>
    </div>
  );
};

export default App;
