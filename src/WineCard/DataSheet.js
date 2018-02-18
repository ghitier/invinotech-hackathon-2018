import React from 'react';
import { Card, CardHeader, CardMedia, CardText } from 'material-ui/Card';

const styles = {
  headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 16,
      fontWeight: 400
  },

  subtitle: {
      fontSize: 18,
      paddingLeft: 8,
      fontWeight: 0
  },

  paragraph: {
      paddingLeft: 24,
      paddingRight: 24
  },

  gridList: {
      width: 'auto',
      height: 'auto'
  },

  hr: {
      display: "block",
      height: 1,
      border: 0,
      borderTop: "1px solid #ccc",
      margin: "1em 0",
      padding: 0
  }
};

export default function DataSheet() {
  return (
    <div>
      <Card>
        <CardHeader>
            <h2 style={styles.headline}>Fiche technique du "Nom du vin"</h2>
        </CardHeader>
        <CardMedia>
            <img src="/image/wineBottle.jpg"/>
        </CardMedia>
        <CardText>
          <div>
              <h2 style={styles.subtitle}>Nom de terroir</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin.</p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Description du sol</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. 
      Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
  pellentesque lobortis odio Lo</p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Exposition</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Altitude</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Type de vin</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Potentiel</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Température de service</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Cépages</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
          <div style={styles.hr}></div>
          <div>
              <h2 style={styles.subtitle}>Accord Mets/Vin</h2>
              <p style={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. </p>
          </div>
        </CardText>
      </Card>
  </div>
  );
}