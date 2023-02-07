import React, { Component } from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <YMaps>
          <div>
            <Map 
            defaultState={{ center: [49.823140, 73.133330], zoom: 16 }} 
            width={525}
            height={540}>
              <Placemark geometry={ [49.823140, 73.133330] }
              options={
                {
                  preset: "islands#redStretchyIcon",
                  // Disabling the close balloon button.
                  balloonCloseButton: false,
                  // The balloon will open and close when the placemark icon is clicked.
                  hideIconOnBalloonOpen: false
                } }
              properties={
                {
                  balloonContent: '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
                  iconContent: "DataLine24"
              }	} />
            </Map>
          </div>
        </YMaps>
      </div>
    );
  }
}

export default GoogleMapStyle;