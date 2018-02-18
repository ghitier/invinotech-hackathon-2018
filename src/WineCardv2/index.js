import React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import MyMap from '../Map';
import CardHeader from 'material-ui/Card/CardHeader';

const styles = {
  card: {
    maxWidth: 500,
  },
  media: {
    height: 150,
  },
  map: {
    height: 80,
  },
  content: {
    display: 'flex',
  },
  actions: {
    justifyContent: 'flex-end',
  }
};

function WineCardv2({ classes }) {
  return (
    <div>
    <Card className={classes.card}>
    <CardHeader className='rotenberg-font' title='Rotenberg' />
    <CardMedia
      className={classes.media}
      image="/image/rotenberg.jpg"
      title="Rotenberg 2007"
    />
    <CardMedia
      className={classes.media}
      image="/image/map.png"
      title="Rotenberg 2007"
    />
    <CardContent className={classes.content}>
      <div style={{ width: 100, height: 100 }}>
        <img style={{ width: 80, height: 80, borderRadius: 40, marginTop: '16px' }} src="/image/calcaire-rotenberg.jpg" />
      </div>
      <div style={{ textAlign: 'left', padding: '16px' }}>
        <Typography variant="headline" component="h2">
          Terroir de calcaire jurassique
        </Typography>
        <Typography component="p" gutterBottom={true} className="giveMeEllipsis">
          Première dalle calcaire de la grande Oolithe, inclinée vers l’est, dressée comme une sentinelle face au sud et à la plaine, le ROTENBERG est le plus précoce des terroirs de Bergheim. Ses sols rouges, marqués ...
        </Typography>
        <Typography component="p" gutterBottom={true}>
          <b>Type</b> : Vin fruité, séducteur, citronné et vibrant. Nez de mandarine charnue. Après aération : senteurs de terre fraîchement remuée, de fleur d'oranger et de framboise
        </Typography>
        <Typography component="p" gutterBottom={true}>
          <b>Potentiel de garde</b> : 10 à 15 ans.
        </Typography>
      </div>
    </CardContent>
    <Divider />
    <CardActions className={classes.actions}>
      <Button size="normal" color="primary">
        Accéder au domaine
      </Button>
    </CardActions>
    </Card>
    </div>
  );
}

export default withStyles(styles)(WineCardv2);
