import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemNameActions } from "./components/store";

function App() {
  const dispatch = useDispatch();
  const todoItems = useSelector((store) => store.itemNameSlice);

  const handleNewItem = (itemName, itemDueDate) => {
    dispatch(itemNameActions.addItem({ itemName, itemDueDate }));
  };

  const handleDeleteItem = (id) => {
    dispatch(itemNameActions.deleteItem(id));
  };
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AppTodo onNewItem={handleNewItem} />
        {todoItems.length <= 0 && <WelcomeMsg />}
        <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
      </center>
    </>
  );
}

export default App;
