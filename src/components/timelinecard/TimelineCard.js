import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Services } from "../../pages";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import { LinearProgressWithLabel } from "../../components";
import { SimplePopover } from "../../components";
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
import NavigationRoundedIcon from "@material-ui/icons/NavigationRounded";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";
import { Variants } from "../../components";
import { Config } from "../../config/DefaultSettings";

// import RepeatIcon from '@material-ui/icons/Repeat';
import PlayArrowTwoToneIcon from "@material-ui/icons/PlayArrowTwoTone";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export default function TimelineCard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  let end_time = null;
  let colorCode = null;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getStatusColor = (status) => {
    if (status === "1900") {
      return "white";
    } else 
    return "blue";
  };
  return (
    <div className="root" align="right">
      <Button aria-describedby={id} onClick={handleClick} >
        Monitor Workflow
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {props.data.map((item, index) => {
          if (item.end_time) {
            var end_temp_time = new Date(item.end_time);
            var end_time = end_temp_time.toLocaleString("en-US", {
              timezone: Config.sys_timezone,
            });
          }

          // console.log("colorCode",colorCode);
          return (
            <Timeline align="alternate" key={item+index}>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {end_time}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  {/* <TimelineDot color={colorCode}> */}
                  {/* <TimelineDot color={item.status < 1300 ? "primary" : item.status < 1900 && item.status > 1300? "secondary" : "grey"}> */}
                  <TimelineDot
                    color={
                      (item.status < 1800) && (item.status != 1550)
                        ? 'primary'
                        : item.status === 1900
                        ? "grey"
                        : (item.status > 1800) && (item.status > 11900)
                        ? "secondary"
                        : item.status === 1550
                        ? "success"
                        : "grey"
                    }
                  >
                    {/* <AssignmentTwoToneIcon /> */}
                    <NavigationRoundedIcon  color={
                      item.status < 1800
                        ? "success"
                        : item.status === 1900
                        ? "success"
                        : "error"
                    }/>
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {item.alias}
                    </Typography>
                    <Typography >{item.status_text}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}
      </Popover>
    </div>
  );
}
