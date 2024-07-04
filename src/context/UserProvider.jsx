import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [count, setCount] = useState(0);
    const [showResultBtn, setShowResultBtn] = useState(false);

  const value = {
    count,
    setCount,
    showResultBtn,
    setShowResultBtn
  };

  useEffect(() => {
    console.log(showResultBtn,"visibilite bouton")
   },[showResultBtn])
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useScore() {
  return useContext(UserContext);
}

export { UserProvider, useScore, UserContext };
