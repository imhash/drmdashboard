import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mapContainer: {
    height: `100vh`,
    width: `calc(100%)`,
    backgroundColor: "#f00",
  },
  agentsContainer: {
    height: `100vh`,
    width: `calc(100%)`,
    backgroundColor: "#fff",
  },
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(20),
      width: theme.spacing(20),
      height: theme.spacing(20),
      boxShadow:
        "5px 3px 1px -2px red,0px 2px 2px 0px rgba(100,0,0,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)",
    },
  },
}));
// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "1px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function Tileview(props) {
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "5px",
        transform: "scale(0.8)",
        background: "white",
      }}
    >
      •
    </Box>
  );
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // var siteState = props.data.value1;

  const getBorderColor = (siteState) => {
    return siteState === "PROD" ? "green" : siteState === "DR" ? "blue" : "orange"

  };

  const getSiteIcon = (siteState) => {
    return siteState === "OK" ? <ArrowDropUpIcon fontSize="large" color="success"></ArrowDropUpIcon> : <ArrowDropDownIcon fontSize="large" color="error"></ArrowDropDownIcon>

  };

  return (
    <Card variant="outlined">
      <React.Fragment>
        <Box
          sx=

          {{
            borderLeft: 7, borderColor: getBorderColor(props.data.value1)

          }}
        >
          <CardContent>

            <div style={{ margin: "1" }}>
              <Typography
                align="left"
                variant="subtitle1"
                sx={{ fontSize: 20 }}
                component="div"
              >
                <b>{props.data.key}</b>
              </Typography>
              <Typography align="left" variant="subtitle1" component="div">
                {props.data.value4}
              </Typography>
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                bgcolor: "white",
              }}
            >
              <Item>
                <Grid container direction="row" alignItems="center">
                  <Grid item><b>PROD</b> </Grid>
                  <Grid item>
                    {getSiteIcon(props.data.value2)}
                  </Grid>

                </Grid>
              </Item>
              <Item>
                {" "}
                <Grid container direction="row" alignItems="center">
                  <Grid item><b>
                    DR</b></Grid>
                  <Grid item>
                    {getSiteIcon(props.data.value3)}
                  </Grid>

                </Grid>
              </Item>


            </Box>
            <Typography align="right" variant="subtitle1" component="div">
              {props.data.value5}
            </Typography>
          </CardContent>

        </Box>

      </React.Fragment>
    </Card>
  );
}
