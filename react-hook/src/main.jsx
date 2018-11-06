import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { UserPane } from "./users.jsx";

let Counter = () => {
  let [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(data => setUser(data) && console.info(data));
  });

  return <UserPane id={user.id} login={user.login} />;
};

ReactDOM.render(<Counter />, document.querySelector("#root"));
