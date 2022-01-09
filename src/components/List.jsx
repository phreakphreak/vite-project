import { useEffect, useState } from "react";
import User from "./User";

const List = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((data) => setUsers(data))
    );
  }, []);
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {users.map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default List;
