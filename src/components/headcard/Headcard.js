
import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import WorkIcon from '@mui/icons-material/Work';

let success = 0;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


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
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (

    <Grid style={{ padding: 10 }}>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        style={{ fontFamily: 'Montserrat, sans-serif'}}>
        <b>DR EXECUTION SUMMARY</b>
      </Typography>
      <Grid direction='row' container spacing={0}>

        <Grid item xs={6} style={{ padding: 10 }}>
          <Card
            className={classes.root}
            variant="outlined"
          >
            <CardContent>


              <div>
                <Box display="flex" alignItems="center">
                  <Box minWidth={35}>



                  </Box>
                </Box>



                <TextField
                 sx={{ m: 0, width: '50ch' }}
                  helperText=""
                  id="demo-helper-text-misaligned"
                  label="NAME"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  size="small"
                  color="action" focused
                  variant="filled"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle  color="info"/>
                      </InputAdornment>
                    ),
                   
                  }}
                />

                <Grid item xs={5} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Grid>
                <Box minWidth={1}>
                  <TextField
                   sx={{ m: 0, width: '50ch' }}
                    helperText=""
                    id="demo-helper-text-misaligned"
                    label="DESIGNATION"
                    style={{ paddingTop: "0px" }}
                    size="small"
                    color="action" focused
                    variant="filled"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WorkIcon  color="info"/>
                        </InputAdornment>
                      ),
                     
                    }}
                  /> </Box>


              </div>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} style={{ padding: 10 }}>

          <Card
            className={classes.root}
            variant="outlined"
          >
            <CardContent>

              <div>
                <Box display="flex" alignItems="center">
                  <Box minWidth={35}>



                  </Box>
                </Box>

                <TextField
                  fullWidth sx={{ m: 0 }}
                  helperText=""
                  id="demo-helper-text-misaligned"
                  label="DR GOAL"
                  style={{ paddingTop: "0px", paddingBottom: "0px" }}
                  size="normal"
                  color="action" focused
                  variant="standard"
                />
                <Grid item xs={5} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Grid>
                <Box minWidth={1}>
                  <TextField
                    fullWidth sx={{ m: 0 }}
                    helperText=""
                    id="demo-helper-text-misaligned"
                    label="BUSINESS IMPACT"
                    style={{ paddingTop: "0px" }}
                    size="normal"
                    color="action" focused
                    variant="standard"
                  /> </Box>


              </div>

            </CardContent>
          </Card>

        </Grid></Grid></Grid>

  );
}
