import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useScore() {
  return useContext(UserContext);
}

export { UserProvider, useScore, UserContext };
