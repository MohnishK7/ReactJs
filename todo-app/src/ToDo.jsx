import { useState } from "react";

function ToDo() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updateTask = task.filter((element, i) => i !== index);
    setTask(updateTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...task];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTask(updateTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updateTasks = [...task];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTask(updateTasks);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
          <input
            type="text"
            placeholder="enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className="move-button" onClick={() => moveTaskUp(index)}>
                👆
              </button>
              <button
                className="move-button"
                onClick={() => moveTaskDown(index)}
              >
                👇
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDo;
