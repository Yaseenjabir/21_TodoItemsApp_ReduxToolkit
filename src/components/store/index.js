import { configureStore, createSlice } from "@reduxjs/toolkit";

const itemName = createSlice({
  name: "itemName",
  initialState: [
    {
      id: 1,
      name: "Buy Milk",
      date: "04/10/24",
    },
    // {
    //   id: 2,
    //   name: "Go to college",
    //   date: "04/10/24",
    // },
  ],
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now(),
        name: action.payload.itemName,
        date: action.payload.itemDueDate,
      };
      state.push(newItem);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    itemNameSlice: itemName.reducer,
  },
});
export default store;

export const itemNameActions = itemName.actions;
