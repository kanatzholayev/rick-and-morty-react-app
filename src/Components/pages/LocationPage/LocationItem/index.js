import React from "react";
import { TableRow, TableCell } from "@mui/material";

const LocationItem = (props) => {
  const { name, type, dimension } = props.data;
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell align="right">{type}</TableCell>
      <TableCell align="right">{dimension}</TableCell>
    </TableRow>
  );
};

export default LocationItem;
