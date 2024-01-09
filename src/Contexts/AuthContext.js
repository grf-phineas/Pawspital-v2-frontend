import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [globalEmail, setGlobalEmail] = useState(null);

  return (
    <AuthContext.Provider value={{ globalEmail, setGlobalEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
