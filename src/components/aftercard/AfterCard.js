import * as React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';



function StatusIcon({ status }) {
  if (status === 'Healthy') {
    return <CheckIcon style={{ color: 'green' }} />;
  } else if (status === 'Impaired') {
    return <CloseIcon style={{ color: 'red' }} />;
  }
  return null;
}


export default function AfterCard(props) {

  if (props.data == null) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Service Table">
        <TableHead>
          <TableRow>
            <TableCell>Service Name</TableCell>
            <TableCell>Site</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Updated on</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.key}</TableCell>
              <TableCell>{row.value1}</TableCell>
              <TableCell><StatusIcon status={row.value2} /></TableCell>
              <TableCell>{row.value3}</TableCell>
                  </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



 