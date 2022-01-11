// import { useEffect, useState } from "react";
import User from "./User";

const List = ({ users, searchTerm }) => {
  const parseString = (str) => str.toLowerCase().trim();
  const filterCallback = (user) => {
    const { name, username, email } = user;
    const searchString = parseString(`${name} ${username} ${email}`);
    return searchString.includes(parseString(searchTerm));
  };
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {users.filter(filterCallback).map((user) => (
        <User key={user.id} {...user} />
      ))}
    </div>
  );
};

export default List;
