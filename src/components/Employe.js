import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Employe() {
  const [users, setUser] = useState([]);
  const [isLoading, setLoading] = useState(true);
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((r) => r.json())
  //       .then((users) => setUser(users))
  //       .catch((e) => console.log(e))
  //       .finally(() => setLoading(false));
  //   }, []);
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((users) => setUser(users.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      employe
      {isLoading && <div>Loading... </div>}
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Employe;
