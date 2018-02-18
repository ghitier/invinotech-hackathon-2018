import React from 'react';
import MyMap from '../Map';
import { CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default function Map() {
  return (
    <div>
      <CardMedia overlay={<CardTitle title="Domaine de l'eau de là" />}>
          <MyMap />
      </CardMedia>
      <CardTitle title="Filtres :" subtitle="filtrer les calques" />
      <CardActions style={{ textAlign: "center" }}>
          <FlatButton label="En fonction des sépages" />
          <FlatButton label="En fonction des domaines" />
          <FlatButton label="En fonction des terroires" />
      </CardActions>
    </div>
  );
}