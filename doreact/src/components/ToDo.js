import React from 'react';
import { useState, useRef } from 'react';

function ToDo() {
  const [toDoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState('');

  const inputTask = useRef(null);

  function addTask() {
    setTodoList([...toDoList, { task: currentTask, completed: false }]);
    inputTask.current.value = '';
    setCurrentTask('');
  }

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

  return (
    <div className="App">
      <h1>To Do List!</h1>
      <div>
        <input
          ref={inputTask}
          value={currentTask}
          type="text"
          placeholer="..Task"
          // Tryck på enter knappen för att lägga till en task
          onKeyDown={(event) => {
            event.keyCode === 13 && addTask();
          }}
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <hr />

      <ul>
        {toDoList.map((val, key) => {
          return (
            <div id="task" key={key}>
              <li>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>
                {val.completed ? 'Mark Incomplete' : 'Mark Complete'}
              </button>
              <button onClick={() => deleteTask(val.task)}>X</button>
              {val.completed ? (
                <h1>Task Complete</h1>
              ) : (
                <h2>Task Not Completed</h2>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDo;
