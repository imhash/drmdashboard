import React, { useEffect, useRef, useState } from "react";
import { useCanvas } from "./useCanvas";
import "./Canvas.css";
import databaseSuccess from "./svgs/database_success1.png";
import databaseFailure from "./svgs/database_failure1.png";
import applicationSuccess from "./svgs/application_success1.png";
import applicationFailure from "./svgs/application_failure1.png";
import storageSuccess from "./svgs/storage_success1.png";
import storageFailure from "./svgs/storage_failure1.png";
import cloudFailure from "./svgs/cloud_failure1.png";
import cloudSuccess from "./svgs/cloud_success1.png";
import Typography from "@material-ui/core/Typography";
const gap = 105;
const primaryX = 230;
const LPrimaryX = 300;
var posX = 450;
var speed = 2;
var image_gap = 100;
const imageX = 50;
const heartSVG =
  "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
const SVG_PATH = new Path2D(heartSVG);

const drawTypes = {
  applicationSuccess: "/siteIcons/mobile-analytics-success.svg",
  databaseSuccess: "/siteIcons/database-success.svg",
  siteSuccess: "/siteIcons/company-success.svg",
  applicationFailed: "/siteIcons/mobile-analytics-failed.svg",
  databaseFailed: "/siteIcons/database-failed.svg",
  siteFailed: "/siteIcons/company-failed.svg",
};
const drawTypes2 = {
  applicationSuccess: require("./svgs/mobile-analytics-success.svg"),
  databaseSuccess: require("./svgs/database-success.svg"),
  siteSuccess: require("./svgs/company-success.svg"),
  applicationFailed: require("./svgs/mobile-analytics-failed.svg"),
  databaseFailed: require("./svgs/database-failed.svg"),
  siteFailed: require("./svgs/company-failed.svg"),
};

const imageApplicationSuccess = new Image(50, 50);
imageApplicationSuccess.src = applicationSuccess;
const imageApplicationFailure = new Image(50, 50);
imageApplicationFailure.src = applicationFailure;
const imageDatabaseFailure = new Image(50, 50);
imageDatabaseFailure.src = databaseFailure;
const imageDatabaseSuccess = new Image(50, 50);
imageDatabaseSuccess.src = databaseSuccess;
const imageStorageSuccess = new Image(50, 50);
imageStorageSuccess.src = storageSuccess;
const imageStorageFailure = new Image(50, 50);
imageStorageFailure.src = storageFailure;
const imageCloudFailure = new Image(50, 50);
imageCloudFailure.src = cloudFailure;
const imageCloudSuccess = new Image(50, 50);
imageCloudSuccess.src = cloudSuccess;
const imageBlank = new Image(50, 50);
const getImage = (type, status) => {
  if (type === "Application" && status === "OK") {
    return imageApplicationSuccess;
  } else if (type === "Application" && status === "FAIL") {
    return imageApplicationFailure;
  } else if (type === "Database" && status === "OK") {
    return imageDatabaseSuccess;
  } else if (type === "Database" && status === "FAIL") {
    return imageDatabaseFailure;
  } else if (type === "Storage" && status === "OK") {
    return imageStorageSuccess;
  } else if (type === "Storage" && status === "FAIL") {
    return imageStorageFailure;
  
} else if (type === "Cloud" && status === "OK") {
  return imageCloudSuccess;
} else if (type === "Cloud" && status === "FAIL") {
  return imageCloudFailure;
}
  return imageBlank;
};

export default function Canvas(props) {
  const [OFFSET, setCoordinates, canvasRef, canvasWidth, canvasHeight] =
    useCanvas();
  const [offset, setOffset] = useState(0);
  const timeoutRef = useRef(null);

  const handleClearCanvas = (event) => {
    setCoordinates([]);
  };

  useEffect(() => {
    if (canvasRef == null) {
      return;
    }
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");

    setOffset(0);
    const updatedNetworkData = getNetworkData(props.data);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    draw2(ctx, updatedNetworkData);

    if (timeoutRef.current !== null) {
      // IF THERE'S A RUNNING TIMEOUT
      clearTimeout(timeoutRef.current); // THEN, CANCEL IT
    }
    march(ctx, updatedNetworkData, offset);

  }, [props.data]);

  function march(ctx, updatedNetworkData, count) {
    draw(ctx, updatedNetworkData, count);

    timeoutRef.current = setTimeout(
      march,
      100,
      ctx,
      updatedNetworkData,
      count > 25 ? 0 : count + 1
    );
  }

  const getImage2 = (item) => {
    switch (item.value1) {
      case "Application":
        return item.value3 === "FAIL"
          ? drawTypes.applicationFailed
          : drawTypes.applicationSuccess;
      default:
        return drawTypes.databaseSuccess;
    }
  };

  const getLineColor = (item) => {
    return item.value1 === "Link" && item.value3 === "FAIL"
      ? "#c91804"
      : "#097d01";
  };


  const getImageText = (item) => {
    return item.value1 === "Blank" 
      ? ""
      : item.key;
  };
  const getImageDesc = (item) => {
    return ( item.value1 === "Blank" || item.value5 === "")
      ? ""
      : item.value5;
  };

  const getNetworkData = (response) => {
    const NTdata = response?.data?.vara?.static_values;
    const nodes = NTdata.filter((item: any) => {
      return item.value2 !== "Link";
    });
    let primaryRow = 0;
    let secondayRow = 0;
    let teritoryRaw = 0;
    const nodesNT: any = [];

    nodes.forEach((element: any) => {
      const node = element;

      switch (element.value2) {
        case "Production":
          primaryRow += 1;

          node.row = primaryRow;
          node.col = 1;
          nodesNT.push(node);
          break;
        case "DR":
          secondayRow += 1;

          node.row = secondayRow;
          node.col = 2;
          nodesNT.push(node);
          break;
        case "3rd":
          teritoryRaw += 1;
          node.row = teritoryRaw;
          node.col = 3;
          nodesNT.push(node);
          break;

        default:
          break;
      }
    });
    const links = NTdata.filter((item: any) => {
      return item.value2 === "Link";
    });
    const linksNT: any = [];
    if (links) {
      links.forEach((element: any) => {
        const link = element;
        const [from, to] = link?.key?.split("-");
        link.from = from;
        link.to = to;
        linksNT.push(link);
      });
    }

    return { nodes: nodesNT, links: linksNT };
  };

  const draw2 = (ctx, networkData) => {
    const width = 800;
    const height = 800;
    const secondaryX = primaryX + canvasWidth / 3;
    const teritaryX = secondaryX + canvasWidth / 3;
    ctx.font = "bold 15px ARIAL";
    ctx.fillText("PRIMARY SITE", primaryX - 50, 40);
    ctx.fillText("SECONDARY SITE", secondaryX + 200, 40);
    const { nodes, links } = networkData;
    for (var i = 0; i < nodes.length; i++) {
      let val = nodes[i];

      const secondaryX = primaryX + canvasWidth / 3;
      const teritaryX = secondaryX + canvasWidth / 3;

      switch (val.col) {
        case 1:
          ctx.font = "lighter 15px Arial";
          ctx.fillText(getImageText(val), primaryX - 135, val.row * gap + 40);
          ctx.fillText(getImageDesc(val), primaryX - 135, val.row * gap + 60);
          ctx.save();
          ctx.scale(1, 1);
          ctx.drawImage(
            getImage(val.value1, val.value3),
            primaryX,
            val.row * image_gap
          );
          ctx.restore();
          break;
        case 2:
          ctx.font = "lighter 15px Arial";
          ctx.fillText(getImageText(val), secondaryX + 350, val.row * gap + 40);
          ctx.fillText(getImageDesc(val), secondaryX + 350, val.row * gap + 60);

          ctx.save();
          ctx.scale(1, 1);
          var imageObj1 = new Image();
          imageObj1.src = drawTypes.databaseFailed;

          ctx.drawImage(
            getImage(val.value1, val.value3),
            secondaryX + 250,
            val.row * image_gap
          );
          ctx.restore();

          break;

        case 3:
          ctx.font = "lighter 15px Arial";
          ctx.fillText(val.key, teritaryX, val.row * gap + 70);

          ctx.font = "lighter 15px Arial";
          ctx.fillText(getImageText(val), secondaryX, val.row * gap + 70);
          ctx.save();
          ctx.scale(0.1, 0.1);
          ctx.translate(teritaryX, val.row * gap);

          ctx.restore();

          break;

        default:
          break;
      }
    }
  };

  const draw = (ctx, networkData, count) => {
    const width = 800;
    const height = 800;
    const LSecondaryX = LPrimaryX + width / 2 + 150;
    const LTertiaryX = LSecondaryX + width / 3;
    const img = document.createElement("img");
    ctx.clearRect(LPrimaryX + 0, 50, width / 1.4, height);
    ctx.setLineDash([9, 2]);
    ctx.lineDashOffset = -count;

    if (networkData.links) {
      networkData.links.forEach((link: any) => {
        const from = networkData.nodes.filter((node: any) => {
          return node?.key === link.from;
        })[0];
        const to = networkData.nodes.filter((node: any) => {
          return node.key === link.to;
        })[0];
        console.log("linkdata", link);
        ctx.beginPath();

        ctx.strokeStyle = getLineColor(link);

        switch (from.col) {
          case 1:
            ctx.moveTo(LPrimaryX + 25, from.row * gap + 25);
            break;
          case 2:
            ctx.moveTo(LSecondaryX, from.row * gap + 25);
            break;
          case 3:
            ctx.moveTo(LTertiaryX, from.row * gap + 25);
            break;
          default:
            break;
        }
        switch (to.col) {
          case 1:
            ctx.lineTo(LPrimaryX + 25, to.row * gap + 25);

            // ctx.fillText("Link Description", LPrimaryX + 50, to.row * gap + 50);
            break;
          case 2:
            ctx.lineTo(LSecondaryX, to.row * gap + 25);

            // ctx.fillText("Link Description", LSecondaryX, to.row * gap + 25);
            break;

          case 3:
            ctx.lineTo(LTertiaryX - 25, to.row * gap + 25);

            break;

          default:
            break;
        }

        ctx.stroke();
      });
    }

    ctx.lineWidth = 4;
    // ctx.stroke();
  };

  return (
    <canvas
      className="App-canvas"
      ref={canvasRef}
      width={canvasWidth}
      height={canvasHeight}
    />
  );
}
