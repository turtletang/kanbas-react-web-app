import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item align-items-center">
      <button
        className="btn btn-danger btn-sm me-2"
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
      >
        {" "}
        Delete{" "}
      </button>
      <button 
      className="btn btn-primary btn-sm me-4"
      onClick={() => dispatch(setTodo(todo))} 
      id="wd-set-todo-click">
        {" "}
        Edit{" "}
      </button>
      {todo.title}
    </li>
  );
}
