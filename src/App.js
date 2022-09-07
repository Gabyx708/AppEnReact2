import "./App.css";
import { useState, useEffect } from "react";
import { TaskTable } from "./components/TaskTable";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import { Container } from "./components/Container";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);

  function createNewTask(taskName) {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTaskItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    ); //es un IF raro)
  };

  useEffect(() => {
    let data = localStorage.getItem("tareas");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []); //primera carga

  const cleanTask = () => {
    setTaskItems(tasksItems.filter((t) => !t.done));
    setshowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className=" bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted(checked)}
          cleanTask={cleanTask}
        />

        {showCompleted && (
          <TaskTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
