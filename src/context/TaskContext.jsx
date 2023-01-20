import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.length,
        about: task.about,
      },
    ]);
  }

  function delateTask(taskId) {
    setTasks(tasks.filter((task) => task.id != taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        delateTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}