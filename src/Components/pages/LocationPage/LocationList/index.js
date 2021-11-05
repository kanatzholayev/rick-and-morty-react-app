import React, { Component } from "react";
import {
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import LocationItem from "../LocationItem";

export class LocationList extends Component {
  render() {
    const locationList = this.props.characters.map((location, idx) => {
      return <LocationItem key={idx} data={location} />;
    });

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Name</b>
              </TableCell>
              <TableCell align="right">
                <b>Type</b>
              </TableCell>
              <TableCell align="right">
                <b>Dimension</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{locationList}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default LocationList;
