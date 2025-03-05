import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="p-2 ">
        <form className="space-y-4 p-4 bg-[#1c1c1c] rounded-lg flex items-center justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-lg font-semibold">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI"
                className="w-full p-2 mt-2 bg-gray-600 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Date</h3>
              <input
                type="date"
                className="w-full p-2 mt-2 bg-gray-600 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Assign to</h3>
              <input
                type="text"
                placeholder="employee name"
                className="w-full p-2 mt-2 bg-gray-600 rounded-md"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Category</h3>
              <input
                type="text"
                placeholder="Design Dev"
                className="w-full p-2 mt-2 bg-gray-600 rounded-md"
              />
            </div>
          </div>
          <div className="w-[35%]">
            <div>
              <h3 className="text-lg font-semibold">Description</h3>
              <textarea
                name=""
                id=""
                className="w-full p-2 mt-1 bg-gray-600 rounded-md"
              ></textarea>
            </div>
            <button className="w-full p-2 mt-4 bg-green-600 rounded-md hover:bg-green-700">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
