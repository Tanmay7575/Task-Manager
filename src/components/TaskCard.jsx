import { useState } from "react";
import { useTask } from "../context/TaskContext";
import EditTask from "./EditTask";

const TaskCard=({ task })=>{
  const { deleteTask } = useTask();
  const [open, setOpen] = useState(false);

  const badgeColor = {
    Low: "bg-green-600",
    Medium: "bg-yellow-600",
    High: "bg-red-600",
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold">{task.title}</h2>
      <p className="text-gray-300">{task.description}</p>

      <div className="flex justify-between items-center mt-2">
        <span className={`px-2 py-1 text-sm rounded ${badgeColor[task.priority]}`}>
          {task.priority}
        </span>

        <span className="text-xs text-gray-400 ">
          {new Date(task.createdAt).toLocaleString()}
        </span>
      </div>

      <div className="flex gap-3 mt-3">
        <button
          className="bg-blue-600 px-3 py-1 rounded cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Edit
        </button>

        <button
          className="bg-red-600 px-3 py-1 rounded cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>

      {open && <EditTask task={task} close={setOpen} />}
    </div>
  );
}

export default TaskCard