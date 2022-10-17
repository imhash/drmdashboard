import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const GoogleMapsComponent = withScriptjs(withGoogleMap((props) => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 25.159639, lng: 55.3367543 }}>
    <Marker position={{ lat: -34.397, lng: 150.644 }} />
  </GoogleMap>
)));

export default GoogleMapsComponent;
