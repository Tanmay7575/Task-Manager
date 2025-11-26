import AddTaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6">
      <h1 className="text-3xl font-bold text-white text-center mb-6">
        Task Manager
      </h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
}
