import { useState } from "react";
import styles from "./AddTodo.module.css";
import { GrAdd } from "react-icons/gr";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container">
      <div className={`${styles["yaseen-row"]} row`}>
        <div className="col-6">
          <input
            value={todoName}
            className={styles.input}
            type="text"
            placeholder="Enter Todos Here"
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButton}
            type="button"
            className="btn btn-success yaseen-btn"
          >
            <GrAdd />
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;
// row yaseen-row
