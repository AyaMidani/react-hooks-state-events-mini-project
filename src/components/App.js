import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, settasks] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleAddTask(newTask) {
    settasks([...tasks, newTask]);
  }
  function handleDeleteTask(deletedTaskText) {
    settasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const visibleTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={category}
        onSelectCategory={setCategory}
      />
       <NewTaskForm
          categories={CATEGORIES.filter((cat) => cat !== "All")}
          onTaskFormSubmit={handleAddTask}
        />
      <TaskList tasks={visibleTasks} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
