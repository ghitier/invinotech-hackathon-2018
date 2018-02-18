import React from 'react';
import { Card, CardTitle, CardMedia, CardText } from 'material-ui/Card';

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

export default function Characteristics() {
  return (
    <div>
      <CardText>
          <h2 style={styles.headline}>Caractéristiques</h2>
          <p>Retrouvez ici les différents caractéristiques de votre vin</p>
      </CardText>
      <Card>
          <CardMedia overlay={<CardTitle title="Chaud" />}>
              <img src="/image/lave.jpg" style={{height: 500, maxWidth: '50%'}}/>
          </CardMedia>
          <CardText>
              <p>Description de ce qu'est un vin chaud et comment l'identifier</p>
          </CardText>
      </Card>
      <Card>
          <CardMedia overlay={<CardTitle title="Froid" />}>
              <img src="/image/flocon.jpg" style={{height: 500, maxWidth: '50%'}}/>
          </CardMedia>
          <CardText>
              <p>Description de ce qu'est un vin froid et comment l'identifier</p>
          </CardText>
      </Card>
      <Card>
          <CardMedia overlay={<CardTitle title="Argileux" />}>
              <img src="/image/sol.jpg" style={{height: 500}}/>
          </CardMedia>
          <CardText>
              <p>Description de ce qu'est un vin argileux et comment l'identifier</p>
          </CardText>
      </Card>      
    </div>
  );
}