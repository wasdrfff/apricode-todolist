import { makeAutoObservable } from "mobx";
import { Todo, Todos } from "../App";
import { todoListData } from "./defaultTodosStore";

class StoreTodos {
  todos: Todos = [];
  constructor() {
    this.todos = todoListData;
    makeAutoObservable(this);
  }
  addTodo(newTodo: Todo) {
    this.todos = [...this.todos, newTodo];
  }
  deleteTodo() {
    this.todos = this.todos.filter((task: Todo) => {
      return task.completed !== true;
    });
  }
  setTodos(todos: Todos) {
    this.todos = todos;
  }
}
export default new StoreTodos();
