import React from "react";
import { TableRow, TableCell } from "@mui/material";

const EpisodeItem = (props) => {
  const { episode, name, air_date } = props.data;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {episode}
      </TableCell>
      <TableCell align="right">{name}</TableCell>
      <TableCell align="right">{air_date}</TableCell>
    </TableRow>
  );
};

export default EpisodeItem;
