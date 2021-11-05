import React, { useState } from "react";
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoListItem = ({ todo, deleteTodo, changeTodo }) => {
  const [checked, setChecked] = useState(todo.checked);

  return (
    <ListItem dense button>
      <Checkbox
        tabIndex={-1}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          changeTodo(todo.id);
        }}
      />
      <ListItemText primary={todo.text} />
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
