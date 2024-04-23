import React from 'react';
import { useState, useRef } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

function ToDo() {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [reminder, setReminder] = useState(false);

  const inputTask = useRef(null);

  function addTask() {
<<<<<<< HEAD
    // add task to list
    setTodoList([
      ...toDoList,
      { task: currentTask, completed: false, reminder },
    ]);
    // clear line
=======
    setTodoList([...toDoList, { task: currentTask, completed: false }]);
>>>>>>> parent of dd493b3 (cleaning)
    inputTask.current.value = '';
    setCurrentTask('');
    setReminder(!reminder);
  }

  const toggleReminder = () => {
    setReminder(!reminder);
  };

  const deleteTask = (taskToDelete) => {
    setTodoList(
      toDoList.filter((task) => {
        return task.task !== taskToDelete;
      })
    );
  };

  const completeTask = (taskToComplete) => {
    setTodoList(
      toDoList.map((task) => {
        if (task.task === taskToComplete) {
          // Toggle the completed property
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

  const handleEdit = (task) => {
    const foundTask = toDoList.find((t) => t.task === task);
    if (foundTask) {
      setEditTask(foundTask);
      setCurrentTask(foundTask.task);
    }
  };

  const handleSave = (task) => {
    if (editTask) {
      const updatedTasks = toDoList.map((task) => {
        if (task.task === editTask.task) {
          return { ...task, task: currentTask };
        }
        return task;
      });
      setTodoList(updatedTasks);
      setEditTask(null);
      setCurrentTask('');
    }
  };

  return (
    <div className="App">
      <h1>To Do List!</h1>
      <div className="container">
        <input
          ref={inputTask}
          value={currentTask}
          type="text"
          placeholder="..Task"
          // Tryck på enter knappen för att lägga till en task
          onKeyDown={(event) => {
            event.keyCode === 13 && addTask();
          }}
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
<<<<<<< HEAD
        <label className="labelReminder">Set Reminder:</label>
        <div className="form-control form-control-check">
          <input
            className="checkReminder"
            name="field-name-three"
            id="unique-field-id-three"
            type="checkbox"
            checked={reminder}
            // value={reminder}
            onChange={toggleReminder}
          />
        </div>

        <button id="addButton" onClick={addTask}>
          Add Task
        </button>
=======
        <button onClick={addTask}>Add Task</button>
>>>>>>> parent of dd493b3 (cleaning)
      </div>
      <hr />

      <ul>
        {toDoList.map((val, key) => {
          return (
            <div id="task" key={key}>
              <li
                style={{
                  textDecoration: val.completed ? 'line-through' : 'none',
                }}
              >
                {val.task}
                {val.reminder ? <FiCheckCircle /> : ''}
              </li>
              <button onClick={() => completeTask(val.task)}>
                {val.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              <button onClick={() => handleEdit(val.task)}>Edit</button>
              <button onClick={handleSave}>Save</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
