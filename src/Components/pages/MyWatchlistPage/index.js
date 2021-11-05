import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const MyWatchlistPage = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = window.localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const updateStorage = () => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    updateStorage();
  }, [todos]);

  return (
    <div className="container main-content">
      <Typography component="h2" variant="h2" sx={{ mb: 3 }}>
        My watchlist
      </Typography>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();
          if (trimmedText.length > 0) {
            setTodos([
              ...todos,
              { checked: false, text: trimmedText, id: new Date() },
            ]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={(id) => {
          const newTodos = todos.filter((item) => item.id !== id);
          setTodos(newTodos);
        }}
        changeTodo={(id) => {
          let newTodos = todos.map((item) => {
            if (item.id === id) {
              item.checked = !item.checked;
            }
            return item;
          });
          setTodos(newTodos);
          updateStorage();
        }}
      />
    </div>
  );
};

export default MyWatchlistPage;
