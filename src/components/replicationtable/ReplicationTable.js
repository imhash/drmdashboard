import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ReplicationTable(props) {
  const classes = useStyles();

  if (props.data == null) {
    return null;
  }
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            {props.data.map((lane, index) => (
              <TableCell key={lane+index}>{lane.value1}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {props.data.map((lane, index) => (
              <TableCell key={lane+index}>{lane.value2}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
