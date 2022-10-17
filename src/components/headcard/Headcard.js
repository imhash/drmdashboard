
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
import { ResponsiveDialog } from "../../components";
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
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import { Variants } from "..";
import { TimelineCard } from "..";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



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

export default function ExecutionCard1() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [alertopen, setAlertOpen] = React.useState(null);
  const [workflow, setWorkflow] = React.useState([]);


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

  return (
    // <div className="App">
    //     {loading && <Variants />}
    //     {!loading &&
    // <Grid item sm xs={5}>
    // <Grid item sm xs={3}>
    <Grid  style={{ padding:10 }}>
      <Typography
                 variant="h5"
                component="h1"
                align="center"
                color="#4a54f1"
                // style={{ background: '#8b0000' , color: "#f2f2f2"}}
                // style={{ paddingLeft: "20px" }}
              >
               <b>DR EXECUTION SUMMARY</b>
              </Typography>
              <Grid style={{ padding:10 }}>
      <Card
        className={classes.root}
        variant="outlined"
        // style={{ background: "#dbd9d9" }}
      >
        <CardContent>
        
          {/* <Card align="right"> */}
          <div>
            <Box display="flex" alignItems="center">
              <Box minWidth={35}>



             </Box>
            </Box>
            
            {/* </div>   */}
            {/* <LinearProgressWithLabel /> */}
            {/* </Card> */}
            {/* <div> */}
            <TextField
        helperText=""
        id="demo-helper-text-misaligned"
        label="Owner"
        style={{ paddingTop: "0px" ,paddingBottom: "0px" }}
        size="small"
      /> 
      <Grid item xs="10" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Grid>
             {/* <Divider orientation="horizontal" variant="string" flexItem light /> */}

      <Box minWidth={1}>
            <TextField
        helperText=""
        id="demo-helper-text-misaligned"
        label="Designation"
        style={{ paddingTop: "0px" }}
        size="small"
      /> </Box>
          </div>

        </CardContent>
      </Card>
    </Grid>
    </Grid>
  );
}
