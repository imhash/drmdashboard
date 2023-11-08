
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Config } from "../../config/DefaultSettings";
import Chip from '@mui/material/Chip';
import StorageIcon from '@mui/icons-material/Storage';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';

export default function Midcard(props) {


  
  var start_temp_time = new Date(props.data.start_time);
  var start_time = start_temp_time.toLocaleString("en-US", {
    timezone: Config.sys_timezone,
  });

  var end_temp_time = new Date(props.data.end_time);
  var end_time = end_temp_time.toLocaleString("en-US", {
    timezone: Config.sys_timezone,
  });

  var run_time = (props.data.runtime/60).toFixed(2);
  var slo_time = parseFloat(props.data.archive_key1);



  return (
  
    <Grid style={{ padding:10 }} >
         <Typography
               variant="subtitle1"
                component="h1"
                align="center"
                 
             
                style={{ fontFamily: 'Montserrat, sans-serif'}}>
               <b>EXECUTION HIGHLIGHTS</b>
              </Typography>

      

      <Grid direction='row' container spacing={0}>
        
            <Grid  item xs={6} style={{ padding:10 }}>
                       <Paper>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Grid container direction="row" alignItems="center"  >
            <StorageIcon /><b>Execution: </b>&nbsp;&nbsp;{props.data.archive_key2} 
            </Grid>
            <Grid container direction="row" alignItems="center" variant="overline" justifyContent="flex-start">
            <AccessTimeTwoToneIcon /><b>DR Execution Start Time:</b> &nbsp;&nbsp;{start_time} 
            </Grid>
                           
            <Grid container direction="row" alignItems="center" variant="overline">
            <AccessTimeFilledTwoToneIcon /><b>DR Execution End Time:</b>  &nbsp;&nbsp;{end_time} 
            </Grid>
            <Grid container direction="row" alignItems="center" variant="overline">
            <AccountTreeTwoToneIcon /><b>Total Number of Steps:</b>  &nbsp;&nbsp;
            {props.work.length}     
           
             </Grid>
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </Paper>
          
           
              
           </Grid>    
           {/* <Grid item xs={1}></Grid> */}
           <Grid item xs={6} style={{ padding:10 }}>   
           <Paper>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            {/* <Divider orientation="vertical" variant="string" flexItem light /> */}
                     <Grid container display="flex" direction="row" alignItems="center">
            <SpeedTwoToneIcon /><b>Defined Recovery Time Objective:</b> &nbsp;&nbsp;{props.data.archive_key1} min(s)
            </Grid>
            <Grid container  direction="row" alignItems="center">
            <TimerTwoToneIcon /><b>Actual Recovery Time (Execution Time):</b> &nbsp;&nbsp;{run_time} min(s)
            </Grid>
            <Grid container  direction="row" alignItems="center">
            <FlagTwoToneIcon /><b>Execution Summary:</b>  &nbsp;&nbsp; 
            
            {(props.isExeLoaded && isNaN(run_time)) ? <Chip label="NA" color="primary" size="small"/> :
            (props.isExeLoaded && !isNaN(run_time)) && <Chip label={run_time < slo_time ? "FULFILLED": "VIOLATED"} color={run_time < slo_time ? "success": "warning"} size="small"/>}
            
            </Grid>
            <Grid container  direction="row" alignItems="center">
            <FlagTwoToneIcon /><b>Status:</b>  &nbsp;&nbsp;{props.data.status_text}
            </Grid>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            </Paper>
            </Grid>
    </Grid>
    </Grid>
  );
}
