import React, { useState, useEffect } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { Container } from "react-bootstrap"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: -34.9228037, lng: -57.9560636 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.9228037, lng: -57.9560636 }} onClick={props.onMarkerClick} />}
    {props.isMarkerShown && <Marker position={{ lat: -34.902694, lng: -57.919776 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

const MapContainer = () => {

  const [isMarkerShown, setIsMarkerShown] = useState(false)

  useEffect(() => {
    delayedShowMarker()
  }, [])

  const delayedShowMarker = () => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 100)
  }

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  }

  return ( 
    <Container>
      <MyMapComponent
          isMarkerShown={isMarkerShown}
          onMarkerClick={handleMarkerClick}
      />
    </Container>
  );
}
 
export default MapContainer;
