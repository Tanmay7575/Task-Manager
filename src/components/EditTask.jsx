import { useState } from "react";
import { useTask } from "../context/TaskContext";

 const EditTask=({ task, close })=> {
  const { updateTask } = useTask();

  const [data, setData] = useState(task);
  const handlechange = (e)=>{
         setData((prev)=>({...prev,[e.target.name]:e.target.value}));
  }

  const handleSubmit= () => {
    console.log(data)
    updateTask(data.id,data);
    close(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center">
      <form className="bg-gray-900 p-6 rounded-lg w-96 text-white" onSubmit ={handleSubmit}>
        <h2 className="text-xl font-bold mb-3">Edit Task</h2>

        <input
          className="p-2 w-full bg-gray-700 rounded mb-2"
          name="title"
          value={data.title}
          onChange={handlechange}
        />

        <textarea
          className="p-2 w-full bg-gray-700 rounded mb-2"
          name="description"
          value={data.description}
          onChange={handlechange}
        />

        <select
          className="p-2 w-full bg-gray-700 rounded mb-3"
          name='priority'
          value={data.priority}
          onChange={handlechange}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <div className="flex justify-between">
          <button className="bg-gray-600 px-3 py-1 rounded" onClick={() => close(false)}>
            Cancel
          </button>

          <button className="bg-green-600 px-3 py-1 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditTask;
