import React, { useCallback, useState } from "react";
import TodoItem from "../todoListItem/TodoItem";
import "./TodoItems.scss";
import { Todo } from "../App";
import storeTodos from "../store/storeTodos";
import { observer } from "mobx-react";

const TodoItems = observer(() => {
  const [showComplited, setShowComplited] = useState(false);
  const [showNoComplited, setShowNoComplited] = useState(true);

  const clickCheckBoxFromDeleted = useCallback(() => {
    setShowNoComplited(!showNoComplited);
  }, [showNoComplited]);
  const clickCheckBox = useCallback(() => {
    setShowComplited(!showComplited);
  }, [showComplited]);
  const filterItems = useCallback(
    (item: Todo) => {
      if (showComplited) {
        return item.completed;
      }
      if (!showNoComplited) {
        return !item.completed;
      }
      return true;
    },
    [showComplited, showNoComplited]
  );

  const handleChange = useCallback((id: number) => {
    console.log(storeTodos.todos);
    storeTodos.setTodos(
      storeTodos.todos.map(function (todo: Todo) {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }, []);

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
        {storeTodos.todos.filter(filterItems).map((item: Todo) => (
          <TodoItem item={item} onChange={handleChange} />
        ))}
      </div>
    </div>
  );
});
export default TodoItems;
