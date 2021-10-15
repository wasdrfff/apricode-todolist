import { Todo } from "../App";
import "./TodoItem.scss";

type TodoItemProps = {
  item: Todo;
  onChange: (id: number) => void;
};

const TodoItem = ({ item, onChange }: TodoItemProps) => {
  return (
    <div className="item">
      <p>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onChange(item.id)}
        />
        {item.task}
      </p>
    </div>
  );
};
export default TodoItem;
