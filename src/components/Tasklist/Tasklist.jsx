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
      {data.tasks.map(function(elem,idx){
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.CompleteTask) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.FailedTask) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
