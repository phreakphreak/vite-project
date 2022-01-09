import "./App.css";
import List from "./components/List";
import PriceInput from "./components/PriceInput"; // eslint-disable-line
import Search from "./components/Search";

const App = () => {
  const handleSearch = (event) => {
    console.log(event.target.value, "cached by handleSearch");
  };
  return (
    <div className="flex flex-col  bg-slate-400 p-6">
      <div className="p-6">
        <Search onSearch={handleSearch} />
      </div>
      <div className="py-6">
        <List />
      </div>
    </div>
  );
};

export default App;
