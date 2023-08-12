import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@material-ui/core/Typography";
import { LinearProgressWithLabel } from "..";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { ResponsiveDialog } from "..";
import { Config } from "../../config/DefaultSettings";
import { makeStyles } from "@material-ui/core/styles";
import { SimplePopover } from "..";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Chip from '@mui/material/Chip';
import Grid from "@material-ui/core/Grid";
import moment from 'moment-timezone';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const data = [
  { serviceName: 'Service A', status: 'tick', time: '08:00 AM' },
  { serviceName: 'Service B', status: 'close', time: '09:30 AM' },
  // Add more data as needed
];



function StatusIcon({ status }) {
  if (status === 'Healthy') {
    return <CheckIcon style={{ color: 'green' }} />;
  } else if (status === 'Impaired') {
    return <CloseIcon style={{ color: 'red' }} />;
  }
  return null;
}




function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}


export default function BeforeCard(props) {

  if (props.data == null) {
    return null;
  }
  console.log("beforeafter1:",props.data);
 
  // const updatedBeforeData = getBeforeData(props);

 console.log("tabledata", props.data);
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



 