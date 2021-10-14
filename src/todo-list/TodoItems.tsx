import React, { useState } from "react";
import TodoItem from "../todoListItem/TodoItem";
import "./TodoItems.scss";
import { Todo, Todos } from "../App";
import todos from "../store/storeTodos";

type TodoItemsProps = {
  items: Todos;
};

function TodoItems(props: TodoItemsProps) {
  const { items } = props;
  const [showComplited, setShowComplited] = useState(false);
  const [showNoComplited, setShowNoComplited] = useState(true);

  function clickCheckBoxFromDeleted() {
    setShowNoComplited(!showNoComplited);
  }
  function clickCheckBox() {
    setShowComplited(!showComplited);
  }
  function filterItems(item: Todo) {
    if (showComplited) {
      return item.completed;
    }
    if (!showNoComplited) {
      return !item.completed;
    }
    return true;
  }
  function handleChange(id: number) {
    todos.setTodos(
      items.map(function (todo: Todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }
  return (
    <div className="contentBody">
      <div className="contentBody-checkInput">
        <span>
          <input type="checkbox" onClick={clickCheckBox} />
          Показать выполненные задачи
        </span>
        <span>
          <input type="checkbox" onClick={clickCheckBoxFromDeleted} />
          Показать невыполненные задачи
        </span>
      </div>
      <div className="contentBody-items">
        {items.filter(filterItems).map((item: Todo) => (
          <TodoItem item={item} onChange={handleChange} />
        ))}
      </div>
    </div>
  );
}
export default TodoItems;
