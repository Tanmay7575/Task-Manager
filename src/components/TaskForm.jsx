import { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const { addTask } = useTask();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleChange = (e) => {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      id: Date.now(),
      ...task,
      createdAt: new Date().toISOString(),
    });
    setTask({ title: "", description: "", priority: "Low" });
  };

  return (
    <form onSubmit={handleSubmit} className=' bg-gray-800 text-white p-4 gap-3 shadow rounded border'>
        <div className="mb-2"> 
        <label className="block text-sm">Title</label>
          <input
        type="text"
        placeholder="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        className="p-2 bg-gray-700 text-white rounded border border-gray-600
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none
            transition-all duration-200"
        required
      />
        </div>
      <div className='mb-2'>
         <label className="block text-sm">Description</label>
        <textarea
          className="p-2 bg-gray-700 text-white rounded border border-gray-600
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none
            transition-all duration-200"
        placeholder="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        required
      />
      </div>
       <div className="mb-2">
         <label className="block text-sm">Priority</label>
        <select
      className="p-2 bg-gray-700 text-white rounded border border-gray-600
            focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition-all"
      name="priority" value={task.priority} onChange={handleChange}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
       </div>
    

      <button className="bg-blue-700 p-2 rounded hover:bg-blue-700 cursor-pointer">Add Task</button>
    </form>
  );
};

export default TaskForm;
