import React, { useState } from "react";
import userContext from "../../contexts/UserContext";
import { user as userData } from "../../data";

const UserProvider = ({ children }) => {
  const login = (newUser) => {
    setUser(() => {
      return {
        ...userState,
        user: newUser,
      };
    });
  };
  const editUser = (newUser) => {
    setUser(() => {
      return {
        ...userState,
        user: newUser,
      };
    });
  };

  const initialState = {
    user: userData,
    login,
    editUser,
  };

  const [userState, setUser] = useState(initialState);

  return (
    <userContext.Provider value={userState}>{children}</userContext.Provider>
  );
};

export default UserProvider;
