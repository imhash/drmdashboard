
import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Services } from "../../pages";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { LinearProgressWithLabel } from "..";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { ResponsiveDialog } from "..";
import { Config } from "../../config/DefaultSettings";

import { SimplePopover } from "..";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Popover from "@material-ui/core/Popover";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Variants } from "..";
import { TimelineCard } from "..";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Hotel } from "@material-ui/icons";
import StorageIcon from '@mui/icons-material/Storage';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import Divider from '@mui/material/Divider';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';


let success = 0;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Midcard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [alertopen, setAlertOpen] = React.useState(null);
  const [workflow, setWorkflow] = React.useState([]);
  console.log("midcard",props.data);

  const handleClick = () => {
    setOpen(true);
    // loadWorkflow();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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


  // {(props.data.runtime/60).toFixed(2)} min(s)
  // let successCount = props.data.filter((x) => x.status >= 1900).length;
  // let successPercent = (successCount / props.work.length) * 100;
  // let success = parseInt(successPercent.toFixed(0));
  return (
    // <div className="App">
    //     {loading && <Variants />}
    //     {!loading &
    <Grid style={{ padding:10 }} >
         <Typography
               variant="subtitle1"
                component="h1"
                align="center"
                 
                // style={{ background: '#8b0000' , color: "#f2f2f2"}}
                // style={{ paddingLeft: "20px" }}
                style={{ fontFamily: 'Montserrat, sans-serif'}}>
               <b>EXECUTION HIGHLIGHTS</b>
              </Typography>

      

      <Grid direction='row' container spacing={0}>
        
            <Grid  item xs={6} style={{ padding:10 }}>
                       <Paper>
                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Grid container direction="row" alignItems="center"  >
            <StorageIcon /><b>Execution: </b>&nbsp;&nbsp;{props.data.archive_key2} 
            {/* <Typography style ={{alignSelf: 'flex-end'}}>yessss</Typography> */}
            </Grid>
            <Grid container direction="row" alignItems="center" variant="overline" justify="flex-start">
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
            {(props.isExeLoaded && !isNaN(run_time)) && <Chip label={run_time < slo_time ? "FULFILLED": "VIOLATED"} color={run_time < slo_time ? "success": "warning"} size="small"/>}
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
