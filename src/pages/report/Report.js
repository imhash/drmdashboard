import React, { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
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

import Button from '@mui/material/Button';


export default function Report(){
     let { runId } = useParams();
     const [children1, setChildren1] = React.useState([]);
     const [execution1, setExecution1] = React.useState([]);
     const [isLoaded, setIsLoaded] = React.useState(false);

     // console.log("report_runid",runId);

     const componentRef = useRef();
     const handlePrint = useReactToPrint({
       content: () => componentRef.current,
     });

     useEffect(() => {
          loadChildren1();
          LoadExecution1();
        },[]);


        const LoadExecution1 = async () => {
          const options = {
            headers: { Authorization: Config.authorization },
          };
          var response = await axios.get(
            Config.base_url +
              "/" +
              Config.client +
              "/executions/" +
              runId,
            options
          );

            setIsLoaded(true);
            setExecution1(response.data);
            
          }
     const loadChildren1 = async () => {
          const options = {
            headers: { Authorization: Config.authorization },
          };
          var response = await axios.get(
            Config.base_url +
              "/" +
              Config.client +
              "/executions/" +
              runId +
              "/children",
            options
          );
  

     


          for (var i=0; i < response.data.data.length; i++) {
               response.data.data[i].id=i;}
          console.log("report_children", response.data.data);
          setChildren1(response.data.data);
        };

return (

   <Grid>
      <Grid align="right">  <Button onClick={handlePrint} >Print</Button></Grid>
      <Grid ref={componentRef}>
        <HeadCard/>
        <MidCard  data={execution1} work={children1} isLoaded={isLoaded}/>
        <FootCard data={children1} />
        </Grid>
   </Grid>

 
// {networks == null ? null : <Canvas data={networks} style={{ background: "transparent"} }/>}   
 
   


            );
        }
      