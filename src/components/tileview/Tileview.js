import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Tileview(props) {
  const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

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
