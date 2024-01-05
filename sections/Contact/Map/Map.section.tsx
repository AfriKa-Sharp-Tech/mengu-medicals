import React from "react";

import styles from "./map.module.css";
import GoogleMapReact from "google-map-react";
import { CONSTANTS } from "@/static/assets/constants";

const MapSection: React.FC = () => {
  const mapStyles = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <section id="map" className={styles.container}>
      <div className={styles.containerContent2}>
        <h6>Get to Us </h6>
        <h5>We are Nearby You Check The Map </h5>
      </div>
      <div className={styles.containerMap}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: CONSTANTS.ENV_SECRETS.GOOGLE_API_KEY as string,
          }}
          defaultCenter={mapStyles.center}
          defaultZoom={mapStyles.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
        <div className={styles.containerContent}>
          <h6>Find us</h6>
          <h5>We are Near you</h5>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
