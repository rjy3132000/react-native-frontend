import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
    updatePost: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.firstName = action.payload.firtsName;
          todo.lastName = action.payload.lastName;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, updatePost } = todoSlice.actions;
export default todoSlice.reducer;
