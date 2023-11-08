import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Typography from "@material-ui/core/Typography";

import { Config } from "../../config/DefaultSettings";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import moment from 'moment-timezone';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function FootCard(props) {



  return (
    <Grid>

      <Typography
        variant="subtitle1"
        component="h1"
        align="center"

        style={{ fontFamily: 'Montserrat, sans-serif' }}>
        EXECUTION STEPS
      </Typography>

      <Grid style={{ padding: 50 }}>
        <div style={{ height: "100%", width: '100%' }}>



          {/* <Paper variant='elevation'> */}
          {props.data == null ? null : <DataGrid autoHeight rows={props.data} columns={columns} initialState={{
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
  { field: 'id', headerName: '#', width: 90 },
  {
    field: 'title',
    headerName: 'Step Name',
    width: 300,
    editable: false,
  },

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
          {(runtime.value / 60).toFixed(2)}
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

];

