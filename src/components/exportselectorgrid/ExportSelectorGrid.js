import * as React from 'react';
import Chip from '@mui/material/Chip';
import { Config } from "../../config/DefaultSettings";
import moment from 'moment-timezone';

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid';
import Link from '@mui/material/Link';

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns = [
    { field: 'title', headerName: 'Direction', width: 180 },
    {
      field: 'archive_key2',
      headerName: 'Application',
      width: 200,
    },
    {
      field: 'name',
      headerName: 'Workflow Name',
      width: 250,
    },

 
    {
      field: 'start_time',
      headerName: 'Start Time',
      width: 200,
      valueFormatter: start_time => moment(start_time?.value).tz(Config.sys_timezone).format('DD/MM/YYYY hh:mm:ss')

    },
    {
      field: 'end_time',
      headerName: 'End Time',
      width: 200,
      valueFormatter: end_time => moment(end_time?.value).tz(Config.sys_timezone).format('DD/MM/YYYY hh:mm:ss')

    },
    {
      field: 'runtime',
      headerName: 'Duration',
      width: 150,
      renderCell: (runtime) => {
        return (
          <div>
              {(runtime.value/60).toFixed(2)} min(s)
          </div>
        );
      }
    },
   

  {
    field:  'rtoStatus', // if RTO > runtime ? RTO Fulfilled : RTO VIOLATED
    headerName: 'RTO Status',
    width: 150,
  
    renderCell: (rtoStatus) => (
    <Chip label={rtoStatus.value} color={rtoStatus.value ==="Fullfilled" ? "success": (rtoStatus.value ==="Calculating" ? "primary": "warning")}/>
    // // <Chip label={(run_time.value/60).toFixed(2) > slo_time ? "FULFILLED": "VIOLATED"} color={(run_time.value/60).toFixed(2) < slo_time ? "success": "warning"}/>

    )
    
  },
  {
    field: 'run_id',
    headerName: 'Summary Report',
    width: 150,
    renderCell: (params) => (
      <Link href={`/report/${params.value}`}>{params.value}</Link>
    )
  },
    
  ];
  

export default function ExportSelectorGrid(props) {
//   const { data } = useDemoData({
//     dataSet: 'Commodity',
//     rowLength: 4,
//     maxColumns: 6,
//   });
// var start_temp_time = new Date(props.data.start_time);
// var starttime = start_temp_time.toLocaleString("en-US", {
//   timezone: Config.sys_timezone,
// });
// console.log("starttime" + starttime);
// var end_temp_time = new Date(props.data.end_time);
// var endtime = end_temp_time.toLocaleString("en-US", {
//   timezone: Config.sys_timezone,
// });




console.log("asd",props.data);
var slo_time = parseInt(props.data.archive_key1);


  return (
    <div 
    style={{ height: 500, width: 'auto' }}
    >
      <DataGrid
        // {...data}

        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        // components={{
        //   Toolbar: CustomToolbar,
        // }}
      />
      
    </div>

  );
}