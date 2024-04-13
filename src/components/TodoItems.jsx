import TodoItem from "./TodoItem";
import style from "./TodoItems.module.css";
import { useSelector } from "react-redux";
function TodoItems({ onDeleteClick }) {
  const todoItems = useSelector((store) => store.itemNameSlice);

  return (
    <>
      <div className={style.itemsContainer}>
        {todoItems.map((item, index) => (
          <TodoItem
            id={item.id}
            key={index}
            todoName={item.name}
            todoDate={item.date}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItems;
