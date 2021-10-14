import React, { useState } from "react";
import TodoItems from "./todo-list/TodoItems";
import { observer } from "mobx-react-lite";
import storeTodos from "./store/storeTodos";
import "./App.scss";

export type Todos = Todo[];
export type Todo = {
  id: number;
  task: string;
  completed: boolean;
};
const App = observer(() => {
  const [newTaskName, setNewTaskName] = useState("");
  function addTask() {
    const newTask = {
      id: storeTodos.todos.length
        ? storeTodos.todos[storeTodos.todos.length - 1].id + 1
        : 0,
      task: newTaskName,
      completed: false,
    };
    storeTodos.addTodo(newTask);
  }
  function deletedTask() {
    storeTodos.deleteTodo();
  }
  return (
    <div className="appWrapper">
      <h1 className="appTag">TodoList</h1>
      <TodoItems items={storeTodos.todos} />
      <div className="appContent">
        <input
          className="appContent-input"
          value={newTaskName}
          onChange={(element) => setNewTaskName(element.target.value)}
          placeholder="Наименование задачи"
        />
        <button className="appContent-buttonForAdd" onClick={addTask}>
          <span className="appContent-buttonForAdd-text">Добавить задачу</span>
        </button>
        <button className="appContent-buttonForDelete" onClick={deletedTask}>
          <span className="appContent-buttonForDelete-text">
            Удалить выполненную задачу
          </span>
        </button>
      </div>
    </div>
  );
});

export default App;
