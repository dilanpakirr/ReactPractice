import { createContext } from "react";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const values = {
    id: "0",
    name: "name",
    bio: "bio",
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
export default UserContext;
