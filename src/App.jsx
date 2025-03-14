import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeDashboard from "./components/Dashboard/EmployeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employe = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employe) {
        setuser("employe");
        setloggedInUserData(employe);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employe" })
        );
      }
    } else {
      alert("Invalid user");
    }
  };
  // useEffect(() => {
  // setLocalStorage()
  // getLocalStorage()
  // },)

  const[userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if (loggedInUser) {
        setuser(loggedInUser.role);
      }
    }
  }, [userData]);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard changeUser ={setuser}/>
      ) : user == "employe" ? (
        <EmployeDashboard changeUser ={setuser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
