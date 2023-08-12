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


function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}
export default function FootCard(props) {

  // var start_temp_time = new Date(props.data.start_time);
  // var starttime = start_temp_time.toLocaleString("en-US", {
  //   timezone: Config.sys_timezone,
  // });

  // var end_temp_time = new Date(props.data.end_time);
  // var end_time = end_temp_time.toLocaleString("en-US", {
  //   timezone: Config.sys_timezone,
  // });

  var runtime = (props.data.runtime/60).toFixed(2);
  console.log("run_time:",props.data);

  var runtime = (props.data.runtime/60).toFixed(2);
var slotime = props.data.archive_key1


  const getStatusColor = (status) => {
    if (status === "1900") {
      return "white";
    } else 
    return "blue";
  };

const classes = useStyles();

  return (
  <Grid>

    <Typography
         variant="subtitle1"
                component="h1"
                align="center"
    // style={{ background: '#8b0000' , color: "#f2f2f2"}}
    // style={{ paddingLeft: "20px" }}
    style={{ fontFamily: 'Montserrat, sans-serif'}}>
   EXECUTION STEPS
  </Typography>

<Grid style={{ padding:50 }}>
    <div style={{ height: "100%", width: '100%' }}>
 
    
    
   {/* <Paper variant='elevation'> */}
     {props.data==null? null : <DataGrid autoHeight rows={props.data} columns={columns} initialState={{
    pagination: {
      paginationModel: { pageSize: 25, page: 0 },
    },
  }} />}
     {/* </Paper> */}
  
    </div>
    </Grid>
    </Grid>

  );
}

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Step Name',
      width: 300,
      editable: false,
    },
    // {
    //   field: 'name',
    //   headerName: 'Object Name',
    //   width: 200,
    //   type: 'date',
    //   editable: false,
    // },
    {
      field: 'start_time',
      headerName: 'Start Time',
      width: 250,
      valueFormatter: start_time => moment(start_time?.value).tz(Config.sys_timezone).format('DD/MM/YYYY hh:mm:ss')


    },
    {
      field: 'end_time',
      headerName: 'End Time',
      width: 200,
      valueFormatter: end_time => moment(end_time?.value).tz(Config.sys_timezone).format('DD/MM/YYYY hh:mm:ss')

    },
    {
      field: 'run_id',
      headerName: 'RunId',
      type: 'text',
      width: 110,
      editable: false,
      
    },

    {
      field: 'runtime',
      headerName: 'Duration (Min.)',
      type: 'text',
      width: 150,
      renderCell: (runtime) => {
        return (
          <div>
              {(runtime.value/60).toFixed(2)}
          </div>
        );
      }
    },
    // {
      {
        field: 'status_text',
        headerName: 'Status Code',
        type: 'text',
        width: 300,
      }
    //   ,
    
    // {
    //     field: 'status',
    //     headerName: 'Status',
    //     type: 'text',
    //     width: 200,
     
    //     renderCell: (runtime,) => {
    //       return (
    //         <div

    //         >
    //               <Chip label={runtime.value == 1900 ? "OK": "Pending"} color={runtime.value == 1900 ?"success": "warning"}/>
    //         </div>
    //       );
    //     }
    //   }
        ];
  
        