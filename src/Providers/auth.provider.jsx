import { useEffect, useState } from "react";
import AuthContext from "../contexts/auth.context.jsx";
import { hello } from "../services/api/auth/auth.service.js";

const AuthProvider = ({ children }) => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);

  const checkIfUserIsLoggedIn = async () => {
    try {
      const response = await hello();
      setIsLoggedInUser(true);
    } catch (err) {
      setIsLoggedInUser(false);
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedInUser, setIsLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
