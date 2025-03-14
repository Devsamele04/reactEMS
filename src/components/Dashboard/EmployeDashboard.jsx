import React from "react";
import Header from "../../others/Header";
import TaskNamelist from "../../others/TaskNamelist";
import Tasklist from "../Tasklist/Tasklist";

const EmployeDashboard = (props) => {
 
  return (
    <div className="h-screen  bg-[#1C1C1C]">
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskNamelist data ={props.data} />
      <Tasklist  data ={props.data} />
    </div>
  );
};

export default EmployeDashboard;
