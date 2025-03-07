import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";

const App = () => {
  const [user, setuser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setuser("admin");
      console.log(user);
    } else if (email == "user@gmail.com" && password == "123") {
      setuser("employe");
      console.log(user);
    } else {
      alert("Invalid user");
    }
  };
  // useEffect(() => {
  // setLocalStorage()
  // // getLocalStorage()
  // },)

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeDashboard />}
    </>
  );
};

export default App;
