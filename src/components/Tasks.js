import Task from "./Task";

function Tasks({ tasks, onDeleteTask, onToggle }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggle={onToggle}
        />
      ))}
    </>
  );
}

export default Tasks;
