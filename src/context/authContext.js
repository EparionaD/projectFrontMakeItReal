import React, { useState, createContext, useContext, useEffect } from 'react';

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(window.localStorage.getItem('userLocal') || null)
  );
  // const [auth, setAuth] = useState(null);

  const signin = (accessToken) => {
    setAuth(accessToken);
  };

  const signup = (accessToken) => {
    setAuth(accessToken);
  };

  const userLocalStorage = (accessToken) => {
    window.localStorage.setItem('userLocal', JSON.stringify(accessToken));
    setAuth(accessToken);
  };

  // const getUser = () => {
  //   const getUserLocalStorageJson = window.localStorage.getItem('userLocal');
  //   if (getUserLocalStorageJson) {
  //     const getUserLocalStorage = JSON.parse(getUserLocalStorageJson);
  //     setAuth(getUserLocalStorage);
  //   }
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <authContext.Provider
      value={{
        auth,
        setAuth,
        userLocalStorage,
        signin,
        signup,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
