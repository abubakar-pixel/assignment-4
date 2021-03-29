import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [toggle, setToggle] = useState();

  return (
    <UserContext.Provider value={[toggle, setToggle]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
