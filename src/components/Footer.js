import React from 'react';
import config from '../../config';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 47.6160228, lng: -3.1664488}}
  >
    <Marker
      position={{ lat: 47.6160228, lng: -3.1664488 }}

    />
  </GoogleMap>
));
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Nous situer</h2>
        <div className="row">
          <div className="col-6">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkE2jkuivqaYM1IFilOWh_mbZR_MmWaOk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          </div>
          <div className="col-6">
            <ul className="contact">
              <li className="fa-home">{config.address}</li>
              <li className="fa-phone">{config.phone}</li>
            </ul>
          </div>
        </div>
        <ul className="copyright">
          <li>&copy; Solid State. All rights reserved.</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
