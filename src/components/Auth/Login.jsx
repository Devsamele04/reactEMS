import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    console.log("email is :", email);
    console.log("password is :", password);
     handleLogin(email,password)
    setemail("");
    setpassword("");
  };

  return (
    <div className=" h-screen w-screen bg-[#1c1c1c] text-white relative">
      <h2 className="text-center text-3xl absolute top-[14%] left-[36%] text-yellow-500 font-bold uppercase">
        Employe Management App
      </h2>
      <div className="flex items-center justify-center h-[95%]">
        <div className="border-2 rounded-xl border-green-600 p-20 w-1/2 ">
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
            className="flex flex-col items-center justify-center "
          >
            <h2 className="font-semibold text-2xl mb-5">Login User</h2>
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              className="border-2 border-green-500 rounded-full px-10 py-2 text-xl outline-none placeholder:text-gray-500  "
              type="email"
              placeholder="Enter your email"
            />
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              className="border-2 border-green-500 rounded-full px-10 py-2 text-xl outline-none mt-3 placeholder:text-gray-500"
              type="password"
              placeholder="Enter password"
            />
            <button className="border-2 hover:bg-green-600 text-white bg-green-400 rounded-full px-32 py-2 mt-4 text-xl outline-none placeholder:text-black">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
