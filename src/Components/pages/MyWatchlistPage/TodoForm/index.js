import React, { useState } from "react";
import { TextField } from "@mui/material";
const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        saveTodo(value);
        setValue("");
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add episode"
        margin="normal"
        sx={{ width: "100%" }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};
export default TodoForm;
