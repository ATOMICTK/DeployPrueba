import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900">
      <div className="container">
      <TaskForm />
      <TaskList />
      </div>
    </main>
  );
}

export default App;