import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      about,
    });

    setTitle("");
    setAbout("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingresa tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          placeholder="Ingresa la Informacion de la Tarea"
          onChange={(e) => setAbout(e.target.value)}
          value={about}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
