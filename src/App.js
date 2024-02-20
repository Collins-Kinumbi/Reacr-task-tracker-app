import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Code some Js projects",
      day: "Feb 13th at 9:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Practice some Js concepts",
      day: "Feb 13th at 12:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Study React fundamentals",
      day: "Feb 13th at 2:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "Take a walk",
      day: "Feb 13th at 3:30pm",
      reminder: true,
    },
    {
      id: 5,
      text: "Start my workout",
      day: "Feb 13th at 4:00pm",
      reminder: true,
    },
    {
      id: 6,
      text: "Do some light Reading",
      day: "Feb 13th at 6:00pm",
      reminder: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  //Delete Task
  function handleDeleteTask(id) {
    // console.log("delete", id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle reminder
  function handleToggleReminder(id) {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }

  //Add task
  function handleAddTask(task) {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  //

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask handleAddTask={handleAddTask} />}

      {tasks.length <= 0 ? (
        "You have no tasks"
      ) : (
        <Tasks
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggle={handleToggleReminder}
        />
      )}
    </div>
  );
}

export default App;
