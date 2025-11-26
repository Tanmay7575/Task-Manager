import { useTask } from "../context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList =()=> {
  const {
    tasks,
    search,
    setSearch,
    setPriority,
    priority,
    sortOrder,
    setSortOrder,
  } = useTask();

  const filtered = tasks
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter((t) =>
      priority === "All" ? true : t.priority === priority
    )
    .sort((a, b) =>
      sortOrder === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );

  return (
    <div className="mt-6">
   
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3">

        <input
          className="p-2 bg-gray-800 text-white rounded border lg:w-80"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="p-2 bg-gray-800 text-white rounded border lg:w-80"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          className="p-2 bg-gray-800 text-white rounded border lg:w-80"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2">
        {filtered.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

    </div>
  );
}

export default TaskList;

