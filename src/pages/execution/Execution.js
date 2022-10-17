import React, { useEffect, useRef } from "react";
import { HeadCard, MidCard, FootCard } from "../../components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Config } from "../../config/DefaultSettings";
import axios from "axios";
import StorageIcon from '@mui/icons-material/Storage';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import AccessTimeFilledTwoToneIcon from '@mui/icons-material/AccessTimeFilledTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import FlagTwoToneIcon from '@mui/icons-material/FlagTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import Divider from '@mui/material/Divider';
import {
     useParams
   } from "react-router-dom";



export default function Report(){
     const [history, setHistory] = React.useState([]);
     // console.log("report_runid",runId);
     useEffect(() => {
        loadHistory();
        },[]);


        const loadHistory = async () => {
            const options = {
              headers: { Authorization: Config.authorization },
            };
            const response = await axios.get(
              Config.base_url +
                "/" +
                Config.client +
                "/executions" +
                "?archive_key2=" +
                services[serviceIndex].key ,
                +"&include_deactivated=true",
                +"&max_results=1000",
        
              options
            );
            console.log(
              "URL..." +
                Config.base_url +
                "/" +
                Config.client +
                "/executions" +
                "?archive_key2=" +
                services[serviceIndex].key ,
                +"&include_deactivated=true"
            );
            console.log("history - initial.....", response.data.data);
            var history = response.data.data.filter(
              (item) => item.archive_key2 === services[serviceIndex].key
            );
            console.log("services_name", services[serviceIndex].key);
            console.log("history.....", history);
        
            for (var i = 0; i < history.length; i++) {
              history[i].id = i;
            }
        
            setHistory(history);
          };

return (
     
   <Grid>
        <HeadCard/>
        <MidCard  data={execution1}/>
<Paper>
        <FootCard data={children1} style={{ background: "white"} }/>
        </Paper>
   </Grid>

 
// {networks == null ? null : <Canvas data={networks} style={{ background: "transparent"} }/>}   
 
   


            );
        }
      