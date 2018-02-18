import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  KmlLayer
} from 'react-google-maps';
import Card, { CardMedia, CardContent } from 'material-ui/Card';

const API_KEY = 'AIzaSyC0R9_vdGFO_UIWY7QAMJnqc_h47L5FiIA';

const Map = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <CardMedia style={{ height: `120px` }} />,
    mapElement: <div style={{ height: `120px` }} />
  }),
  withScriptjs,
  withGoogleMap,  
)(props => (
  <GoogleMap
  mapTypeId='satellite'
  clickableIcons={false}
  defaultZoom={8}
  defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <KmlLayer url="http://www.marceldeiss.fr/googleearth/domaine-marcel-deiss11.kmz" />
  </GoogleMap>
));

export default Map;
