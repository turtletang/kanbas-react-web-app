// a setup for a redux slice using redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// define the initial state
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
],
  todo: { title: "Learn Mongo" },
};

// create a slice. The createSlice function creates a slice called "todos", using initialState and a set of reducers. The reducers define the actions (functions) that can modify the state.
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [
        ...state.todos,                                                  // using the spread operator (...) to create a new array called newTodos that includes all the elements from the existing state.todos array.
        { ...action.payload, id: new Date().getTime().toString() },         //action.payload contains the data for the new to-do item (except for the ID). The ID is generated using the current timestamp.
      ];
      state.todos = newTodos;
      state.todo = { title: "" };                                        // The todos array is updated to include the new item, and todo is reset to an empty title { title: "" }.
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
    },

    // setTodo reducer function updates the todo property in the state with the value provided in action.payload.It is used to set the current to-do item being edited or viewed.
    setTodo: (state, action) => {
      state.todo = action.payload;
}, },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;