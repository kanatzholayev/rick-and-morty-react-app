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
import EpisodeItem from "../EpisodeItem";

export class EpisodeList extends Component {
  render() {
    const episodeList = this.props.episodeList.map((episode, idx) => {
      return <EpisodeItem key={idx} data={episode} />;
    });

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Episode</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Air Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{episodeList}</TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default EpisodeList;
