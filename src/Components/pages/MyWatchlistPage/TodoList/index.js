import React from "react";
import { List } from "@mui/material";
import TodoListItem from "../TodoListItem";

const TodoList = ({ todos, deleteTodo, changeTodo }) => {
  return (
    <List>
      {todos.map((todo) => {
        return (
          <TodoListItem
            key={todo.id}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
            todo={todo}
          />
        );
      })}
    </List>
  );
};

export default TodoList;
