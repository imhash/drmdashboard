
import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import WarningIcon from '@mui/icons-material/Warning';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DescriptionIcon from '@mui/icons-material/Description';

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

    <Grid  style={{ padding:30 }}>
      <Typography
                 variant="subtitle1"
                component="h1"
                align="center"
                style={{ fontFamily: 'Montserrat, sans-serif'}}
                // style={{ paddingLeft: "20px" }}
              >
               <b>TEST RESULTS</b>
              </Typography>
              <Grid style={{ padding:20 }}>
      <Card
        className={classes.root}
        variant="outlined"
        // style={{ background: "#dbd9d9" }}
      >
        <CardContent>
        
          {/* <Card align="right"> */}
          <div>
            <Box display="flex" alignItems="center"  sx={{
        width: 500,
        maxWidth: '100%',
      }}>
              {/* <Box minWidth={120}> */}



             {/* </Box> */}
            </Box>
            
  
        <TextField fullWidth sx={{ m: 1 }}
          id="challenges"
          label="CHALLENGES ENCOUNTERED"
          multiline
          maxRows={5}
          variant="filled"
          color="warning" focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <WarningIcon  color="warning"/>
              </InputAdornment>
            ),
           
          }}
        />

<TextField fullWidth sx={{ m: 1 }}
          id="lessons"
          label="LESSONS LEARNED"
          multiline
          maxRows={5}
          variant="filled"
          color="success" focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CastForEducationIcon color="success" />
              </InputAdornment>
            ),
           
          }}
        />

<TextField fullWidth sx={{ m: 1 }}
          id="notes"
          label="ADDITIONAL NOTES"
          multiline
          maxRows={5}
          variant="filled"
          color="primary" focused
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon color="primary" />
              </InputAdornment>
            ),
           
          }}
        />
        
          </div>

        </CardContent>
      </Card>
    </Grid>
    </Grid>
  );
}
