import { MdDelete } from "react-icons/md";

function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row yaseen-row">
        <div className="col-6">{todoName}</div>

        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger yaseen-btn"
            onClick={() => onDeleteClick(id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
