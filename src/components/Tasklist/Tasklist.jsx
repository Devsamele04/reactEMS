import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex overflow-x-auto items-center text-white justify-start gap-4 px-6 flex-nowrap w-full py-5 "
    >
      {console.log(data)}
      {data.tasks.map(function (elem, idx) {
        console.log(elem);

        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
