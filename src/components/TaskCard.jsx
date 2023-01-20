import { useContext } from "react";
import {TaskContext} from "../context/TaskContext";

function TaskCard({ task }) {
  const { delateTask } = useContext(TaskContext);

  function showAlert() {
    alert("Tarea Eliminada... ");
  }

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1 >
      <p className="text-gray-500 text-sm">{task.about}</p>
      <button className="bg-red-600 px-2 py-2 rounded-md mt-4" onClick={() => delateTask(task.id) + showAlert()}>
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
