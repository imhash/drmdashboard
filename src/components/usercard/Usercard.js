
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import WarningIcon from '@mui/icons-material/Warning';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import DescriptionIcon from '@mui/icons-material/Description';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default function ExecutionCard1() {
  const classes = useStyles();
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [loading, setLoading] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  // const [alertopen, setAlertOpen] = React.useState(null);
  // const [workflow, setWorkflow] = React.useState([]);




  return (

    <Grid style={{ padding: 30 }}>
      <Typography
        variant="subtitle1"
        component="h1"
        align="center"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <b>TEST RESULTS</b>
      </Typography>
      <Grid style={{ padding: 20 }}>
        <Card
          className={classes.root}
          variant="outlined"
        >
          <CardContent>

            <div>
              <Box display="flex" alignItems="center" sx={{
                width: 500,
                maxWidth: '100%',
              }}>



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
                      <WarningIcon color="warning" />
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
