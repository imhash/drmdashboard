import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { styled } from '@mui/material/styles';
import { Tileview } from "../../components";
import { Config } from "../../config/DefaultSettings";
import axios from "axios";
import Typography from "@material-ui/core/Typography";








const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Home() {
  const [dashboard, setDashboard] = React.useState([]);


  useEffect(() => {
    loadDashboard();

    const interval = setInterval(() => {
      loadDashboard();


    }, Config.refresh_interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {

    loadDashboard();
  }, []);




  const loadDashboard = async () => {

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

    setDashboard(response.data.data.vara.static_values);
  }


  return (
    <Grid style={{ padding: 20 }}>
      <Grid >
        <Typography
          variant="h6"
          component="h1"
          align="center"


        >
          <b>CRITICAL BUSINESS APPS</b>
        </Typography>
      </Grid>
      <Grid container rowpacing={1} spacing={5} style={{ padding: 20 }}
      >


        {dashboard.map((item, index) => (
          <Grid key={"grid_" + item + index} item xs={6} md={Config.tile_size}>
            <Tileview key={"tileview_" + item + index} data={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
