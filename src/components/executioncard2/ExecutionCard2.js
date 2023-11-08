import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Config } from "../../config/DefaultSettings";
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineTwoToneIcon from '@mui/icons-material/PlayCircleOutlineTwoTone';
import Tooltip from '@mui/material/Tooltip';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function ExecutionCard2(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [workflow, setWorkflow] = React.useState([]);


  let successCount = props.work.filter((x) => x.status >= 1900).length;
  let successPercent = (successCount / props.work.length) * 100;
  let success = parseInt(successPercent.toFixed(0));

  // const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  if (props.data == null) {
    return null;
  }

  //Date Conversion
  if (props.data.start_time) {
    var start_temp_time = new Date(props.data.start_time);
    var start_time = start_temp_time.toLocaleString("en-US", {
      timezone: Config.sys_timezone,
    });
  } else start_time = null;
  if (props.data.end_time) {
    var end_temp_time = new Date(props.data.end_time);
    var end_time = end_temp_time.toLocaleString("en-US", {
      timezone: Config.sys_timezone,
    });
  } else end_time = null;

  const loadWorkflow = async () => {
    const options = {
      headers: {
        Authorization: Config.authorization,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      Config.base_url + "/" + Config.client + "/executions/",
      { object_name: props.data.name },
      options
    );

    setWorkflow(response.data);
    setOpen(true);

  };


  const message_workflow = workflow;
  const message_workflow_id = workflow.run_id;
  const message_workflow_alert = "Launch Completed Successfully!, RunId:" + message_workflow_id;


  const handleClick = () => {
    loadWorkflow();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (

    <Grid item sm xs={12}>
      <Card
        className={classes.root}
        variant="outlined"
        style={{ background: "#dbd9d9" }}
      >
        <CardContent>
          <Typography color="textSecondary">
            {props.data.title}
          </Typography>

          <div>
            <Box display="flex" alignItems="center">
              <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" value={success} />
              </Box>
              <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">
                  {success}%
                </Typography>
              </Box>
            </Box>

          </div>
          <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
              <Typography
                variant="overline"
                component="h2"
                align="left"
                color="primary"
                style={{ paddingLeft: "20px" }}
              >
                <b>Worfklow</b>: {props.data.name}
              </Typography>
            </Box>
            <Box minWidth={35}>
              <Typography
                variant="overline"
                component="h2"
                align="left"
                color="textSecondary"
                style={{ paddingLeft: "20px" }}
              >
                <b>Start Time:</b> {start_time}
              </Typography>
              <Typography
                variant="overline"
                component="h2"
                align="left"
                color="textSecondary"
                style={{ paddingLeft: "20px" }}
              >
                <b>End Time:</b> {end_time}
              </Typography>
              <Typography
                variant="overline"
                component="h2"
                align="left"
                color="textSecondary"
                style={{ paddingLeft: "20px" }}
              >
                <b>Estimated Runtime:</b> {(props.data.estimated_runtime / 60).toFixed(2)} min(s)
              </Typography>
              <Box width="100%" mr={1}>
                <Typography
                  variant="overline"
                  component="h2"
                  align="left"
                  color="textSecondary"
                  style={{ paddingLeft: "20px" }}
                >
                  <b>Status:</b> {props.data.status_text}{" "}
                  <span style={{ paddingLeft: "400px" }}> </span>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box>
            <Tooltip title="Execute" arrow>
              <IconButton aria-label="execute" onClick={handleClick} color="primary" size="small" >
                <PlayCircleOutlineTwoToneIcon /></IconButton>
            </Tooltip>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity={message_workflow.run_id == null ? "Error" : "Success"}>
                {message_workflow.run_id == null ? "Error occured: Checkout the Automic UI" : message_workflow_alert}
              </Alert>
            </Snackbar>
          </Box>
        </CardContent>
        <CardActions>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={11}

          >
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
