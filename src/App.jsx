import "./App.css";
import List from "./components/List";
import Search from "./components/Search";
import { useFetch, useSemiPersistentState } from "./hooks";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [searchTerm, setSearchTerm] = useSemiPersistentState({
    key: "searchTerm",
    initialState: "clementin",
  });

  const { data, error, loading } = useFetch(USERS_URL);
  if (error) {
    console.log(error);
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="flex flex-col p-6 bg-slate-400">
      <div className="p-6">
        <Search searchTerm={searchTerm} onSearch={handleSearch} />
      </div>
      <span className="flex flex-col max-w-md mx-auto my-0 ">
        {searchTerm && (
          <p className="block p-2 text-2xl font-medium text-white">
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
