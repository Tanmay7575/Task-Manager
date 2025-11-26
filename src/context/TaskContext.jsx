import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TaskContext = createContext();

export const useTask = ()=> useContext(TaskContext);

export function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  });

  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks((prev) => [...prev, task]);

  const deleteTask = (id) =>
    setTasks((prev) => prev.filter((t) => t.id !== id));

  const updateTask = (updateId,updatedTask) =>
    setTasks((prev) =>
      prev.map((t) => (t.id === updateId ? updatedTask : t))
    );

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        search,
        setSearch,
        priority,
        setPriority,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
