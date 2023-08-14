import React, { useEffect, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import { HeadCard, MidCard, FootCard, Usercard, BeforeCard, AfterCard } from "../../components";
import Grid from "@material-ui/core/Grid";
import { Config } from "../../config/DefaultSettings";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import DownloadForOfflineTwoToneIcon from '@mui/icons-material/DownloadForOfflineTwoTone';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {
  useParams
} from "react-router-dom";
import { saveAs } from 'file-saver'; // library to save file
import html2pdf from 'html2pdf.js';

export default function Report() {
  let { runId } = useParams();
  const [children1, setChildren1] = React.useState([]);
  const [before, setBefore] = React.useState([]);
  const [after, setAfter] = React.useState([]);
  const [execution1, setExecution1] = React.useState([]);
  const [isExeLoaded, setIsExeLoaded] = React.useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    // Adjust tabular column width before downloading PDF
    if (componentRef.current) {
      const tables = componentRef.current.getElementsByTagName('table');
      for (let i = 0; i < tables.length; i++) {
        const table = tables[i];
        const columns = table.getElementsByTagName('col');
        const totalWidth = Array.from(columns).reduce((acc, col) => acc + col.width, 0);
        const scaleFactor = 100 / totalWidth;
        for (let j = 0; j < columns.length; j++) {
          columns[j].width = `${columns[j].width * scaleFactor}%`;
        }
      }
    }
  }, [componentRef]);

  const downloadPDF = () => {
    const opt = {
      margin: 1,
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'pt', format: 'a2', orientation: 'portrait' },
      pagebreak: { avoid: '.pagebreak' },
      fit: { width: '100%', height: 'auto' },
    };
    html2pdf().set(opt).from(componentRef.current).save();
  };

  const handleDownload = () => {
    const reportUrl = 'componentRef.current'; // URL of the PDF report
    const fileName = 'report.pdf'; // name of the file to be saved

    fetch(reportUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };


  useEffect(() => {
    loadChildren1();
    LoadExecution1();
    loadBefore();
    loadAfter();
  }, []);
  const options = {
    orientation: 'portrait',
    unit: 'in',
    format: [12, 15],
  };

  const LoadExecution1 = async () => {
    const options = {
      headers: { Authorization: Config.authorization },
    };
    var response = await axios.get(
      Config.base_url + "/" + Config.client + "/executions/" + runId,
      options
    );
    setIsExeLoaded(true);
    setExecution1(response.data);
  }

  const loadBefore = async () => {
    const options = {
      headers: { Authorization: Config.authorization },
    };
    const response = await axios.get(Config.base_url + "/" + Config.client + "/objects/" + "VARA.BEFORE." + runId,
      options
    );
    var values = response.data.data.vara.static_values;
    setBefore(values);
  };

  const loadAfter = async () => {
    const options = {
      headers: { Authorization: Config.authorization },
    };
    const response = await axios.get(Config.base_url + "/" + Config.client + "/objects/" + "VARA.AFTER." + runId,
      options
    );
    var values = response.data.data.vara.static_values;
    setAfter(values);
  };


  const loadChildren1 = async () => {
    const options = {
      headers: { Authorization: Config.authorization },
    };
    var response = await axios.get(
      Config.base_url + "/" + Config.client + "/executions/" + runId + "/children",
      options
    );
    for (var i = 0; i < response.data.data.length; i++) {
      response.data.data[i].id = i;
    }
    setChildren1(response.data.data);
  };

  return (
    <div>
      <div ref={componentRef}>
        {/* your component code goes here */}
      </div>
      <div align="right">
      <Tooltip title="Download Report" arrow>
      <IconButton aria-label="delete" onClick={downloadPDF} color="primary">
      <DownloadForOfflineTwoToneIcon  /></IconButton>
      </Tooltip>
        </div>
      <Grid>
        <Grid ref={componentRef} >
          <HeadCard />
          <MidCard data={execution1} work={children1} isExeLoaded={isExeLoaded} />
          <FootCard data={children1} />
          <Grid container spacing={3}>
            <Grid item xs={6} style={{ padding: 50 }}>
              <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Montserrat, sans-serif', align: 'center' }}>INITIAL STATE </Typography>
              <BeforeCard data={before} />
            </Grid>
            <Grid item xs={6} style={{ padding: 50 }}>
              <Typography variant="subtitle1" align="center" style={{ fontFamily: 'Montserrat, sans-serif' }}>FINAL STATE</Typography>
              <AfterCard data={after} />
            </Grid>
          </Grid>
          <Grid >
            <Usercard />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
