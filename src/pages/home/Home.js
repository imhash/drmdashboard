import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { styled } from '@mui/material/styles';
import {Tileview } from "../../components";
import Switch from '@mui/material/Switch';
import { Config } from "../../config/DefaultSettings";
// import useGlobalSettings   from "../../components/hooks/useGlobalSettings";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
// const response2 = await fetch("config/DefaultSettings.json");
// const Config1 = await response2.json();







const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home(){
  const [dashboard, setDashboard] = React.useState([]);
  // const [globalConfig] = useGlobalSettings();

  // console.log("globalConfig",globalConfig);


//Fetching Global Config Settings.....

  // const [globalConfig,setGlobalConfig] = React.useState([{}])
  // useEffect(()=>{
  //   fetch('config/DefaultSettings.json').then((res)=>res.json()).then((data)=>{
  //     console.log("jsonfile", data );
  //     setGlobalConfig(data)
  //   })
  // },[])

  useEffect(() => {
       loadDashboard();

       const interval = setInterval(() => {
        loadDashboard();

          // console.log('updated............');
      },Config.refresh_interval);
  
      return () => clearInterval(interval);
     },[]);

     useEffect(() => {
      // console.log("119.............")
      // console.log("NserviceIndex......." + serviceIndex)
      loadDashboard();
    }, []);




     const loadDashboard = async () => {
      // const response2 = await fetch("config/DefaultSettings.json");
      // const Config1 = await response2.json();
      // console.log("config_file",response2);
       const options = {
         headers: { Authorization: Config.authorization },
       };
       var response = await axios.get(
        Config.base_url +
        "/" +
        Config.client +
        "/objects/" +
        Config.dashboard_variable,

      options
         
       );

       console.log("Dashboard",response.data.data.vara.static_values);
       setDashboard(response.data.data.vara.static_values);
       }


return (
<Grid style={{ padding:20 }}>
<Grid >
<Typography
  variant="h6"
 component="h1"
 align="center"
 
 // style={{ background: '#8b0000' , color: "#f2f2f2"}}
 // style={{ paddingLeft: "20px" }}
>
<b>CRITICAL BUSINESS APPS</b>
</Typography>
</Grid>
<Grid container rowspacing={1} spacing={5} style={{ padding:20 }}
>


{dashboard.map((item, index) => (
    <Grid key={"grid_"+item+index} item xs={6} md={Config.tile_size}>
    <Tileview key={"tileview_"+item+index} data={item}/>
  </Grid>
  ))}
</Grid>
</Grid>
);
}
