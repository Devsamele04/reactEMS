import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {

const [userData,setUserData] = useContext(AuthContext)

  return (
    <div  className=" bg-[#1c1c1c] p-4 rounded mt-1 h-50 ">
      <div className="bg-red-400 mb-2 rounded px-4 py-2 flex items-center justify-between">
        <h2 className="w-1/5 ">Employee name</h2>
        <h3 className="w-1/5 ">New Task</h3>
        <h5 className="w-1/5 ">Active Task</h5>
        <h5 className="w-1/5 ">completed task</h5>
        <h5 className="w-1/5 ">Failed Task</h5>
      </div>
     <div id="a" className="h-[80%] overflow-auto">
     {userData.map(function(elem,idx){
        return  <div key={idx} className="border border-emerald-400 mb-2 rounded px-4 py-2 flex items-center justify-between">
        <h2 className="w-1/5 text-lg font-medium">{elem.firstname}</h2>
        <h3 className="w-1/5 text-lg font-medium text-blue-600">{elem.taskNumbers.newTask}</h3>
        <h5 className="w-1/5 text-lg font-medium text-yellow-600">{elem.taskNumbers.active}</h5>
        <h5 className="w-1/5 text-lg font-medium ">{elem.taskNumbers.completed}</h5>
        <h5 className="w-1/5 text-lg font-medium">{elem.taskNumbers.failed}</h5>
      </div>
      })}
     </div>
    </div>
  );
};

export default AllTask;
