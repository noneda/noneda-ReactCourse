import { useState } from "react";

const LoginSettings = () => {
  const [user, setUser] = useState({ name: "Bob" });
  const LogOut = () => setUser(null);
  const Login = () => setUser({ name: "Bob" });

  return {
    user,
    LogOut,
    Login,
  };
};

export default LoginSettings;
