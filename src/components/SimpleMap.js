import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 47.6160228,
      lng: -3.1730149
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCkE2jkuivqaYM1IFilOWh_mbZR_MmWaOk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={47.6160228}
            lng={-3.1730149}
            text="Ecole de Natation"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
