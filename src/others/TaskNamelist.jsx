import React from "react";

const TaskNamelist = ({data}) => {
  return (
    <div className="flex p-6 justify-between gap-5 w-screen">
      <div className="py-6 px-9 rounded-xl w-[45%] text-white  bg-amber-800">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] text-white  bg-blue-800">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] text-white  bg-green-800">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">Accepted Task</h3>
      </div>
      <div className="py-6 px-9 rounded-xl w-[45%] text-white  bg-yellow-800">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNamelist;
