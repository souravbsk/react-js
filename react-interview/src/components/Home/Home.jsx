import React, { createContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HelloWold from "../HelloWorld/HelloWold";


export const UserContext = createContext();

const Home = () => {
//   const [users, setUser] = useState([]);
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);
  const name = 'sourav'
  return (
    <UserContext.Provider value={name}>
      <div>
        <h2>THis is Home</h2>
        {/* {
            users?.map(user => <li key={user.id}>
                <Link to={`/user/${user.id}`}>{user.username}</Link>
            </li>)
        } */}
<HelloWold></HelloWold>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
