import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class Map extends Component {
  renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: { lat: 35.036516, lng: -89.889879 },
      map,
      title: "Hello World!",
    });
    return marker;
  };
  static defaultProps = {
    center: {
      lat: 35.036516,
      lng: -89.889879,
    },
    zoom: 11,
  };
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC_IXDSnJgDTnYgl5JPCi64-pdylNlueO4" }}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={35.036516} lng={-89.889879} Marker />
        </GoogleMapReact>
      </div>
    );
  }
}
export default Map;
