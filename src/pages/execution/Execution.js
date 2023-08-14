import React, { useEffect, useRef } from "react";
import { HeadCard, MidCard, FootCard } from "../../components";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Config } from "../../config/DefaultSettings";
import axios from "axios";

export default function Report() {
  const [history, setHistory] = React.useState([]);
  useEffect(() => {
    loadHistory();
  }, []);


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
      services[serviceIndex].key,
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
      services[serviceIndex].key,
      +"&include_deactivated=true"
    );
    var history = response.data.data.filter(
      (item) => item.archive_key2 === services[serviceIndex].key
    );


    for (var i = 0; i < history.length; i++) {
      history[i].id = i;
    }

    setHistory(history);
  };

  return (

    <Grid>
      <HeadCard />
      <MidCard data={execution1} />
      <Paper>
        <FootCard data={children1} style={{ background: "white" }} />
      </Paper>
    </Grid>






  );
}
