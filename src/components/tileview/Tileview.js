import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleMapsComponent } from "../../components";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { PieChart } from "../../components";
import { HeadCard, MidCard, GridReport1, GridReport2 } from "../../components";
import HomeIcon from "@mui/icons-material/Home";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReportIcon from "@mui/icons-material/Report";
import StorageIcon from "@mui/icons-material/Storage";
import AccessTimeTwoToneIcon from "@mui/icons-material/AccessTimeTwoTone";
import AccessTimeFilledTwoToneIcon from "@mui/icons-material/AccessTimeFilledTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import SpeedTwoToneIcon from "@mui/icons-material/SpeedTwoTone";
import TimerTwoToneIcon from "@mui/icons-material/TimerTwoTone";
import FlagTwoToneIcon from "@mui/icons-material/FlagTwoTone";
import AssignmentTwoToneIcon from "@mui/icons-material/AssignmentTwoTone";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TrafficTwoToneIcon from "@mui/icons-material/TrafficTwoTone";
import Switch from "@mui/material/Switch";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Config } from "../../config/DefaultSettings";
import { NoEncryption } from "@material-ui/icons";

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
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "1px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Tileview(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
      return siteState === "OK" ?  <ArrowDropUpIcon fontSize="large" color="success"></ArrowDropUpIcon> :   <ArrowDropDownIcon fontSize="large" color="error"></ArrowDropDownIcon>   
   
       };

  return (
    <Card variant="outlined">
      <React.Fragment>
        <Box
          sx=
          
          {{ borderLeft: 7, borderColor: getBorderColor(props.data.value1)
        
        }}
       >
          <CardContent>
  
            <div style={{ margin: "1" }}>
              <Typography
                align="left"
                variant="OVERLINE"
                sx={{ fontSize: 20 }}
                component="div"
              >
                <b>{props.data.key}</b>
              </Typography>
              <Typography align="left" variant="h7" component="div">
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
            <Typography align="right" variant="h7" component="div">
               {props.data.value5}
              </Typography>
          </CardContent>
     
        </Box>
    
      </React.Fragment>
    </Card>
  );
}
