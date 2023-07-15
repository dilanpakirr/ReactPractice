import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      {user.id}
      <br></br>
      {user.name}
      <br></br>
      {user.bio}
    </div>
  );
}

export default Profile;
