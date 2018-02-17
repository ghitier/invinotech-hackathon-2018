import React from 'react';
import { compose, withProps } from 'recompose';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MyMap from './Map';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div style={{ maxWidth: "1080px", margin: "auto" }}>
                    <Card>
                        <CardHeader
                            title="Nom du vin"
                            subtitle="taste good!"
                            avatar="/image/wineBottle.jpg"/>
                        <Tabs>
                        <Tab label="Fiche technique">
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
                            </Tab>
                            <Tab label="Caractéristiques" >
                                <div>
                                    <GridList>
                                    </GridList>
                                    <CardText>
                                        <h2 style={styles.headline}>Caractéristiques</h2>
                                        <p>Retrouvez ici les différents caractéristiques de votre vin</p>
                                    </CardText>
                                    <Card>
                                        <CardMedia overlay={<CardTitle title="Chaud" />}>
                                            <img src="/image/lave.jpg" style={{height: 500, maxWidth: '50%'}}/>
                                        </CardMedia >
                                        <CardText>
                                            <p>Description de ce qu'est un vin chaud et comment l'identifier</p>
                                        </CardText>
                                    </Card>
                                    <Card>
                                        <CardMedia overlay={<CardTitle title="Froid" />}>
                                            <img src="/image/flocon.jpg" style={{height: 500, maxWidth: '50%'}}/>
                                        </CardMedia >
                                        <CardText>
                                            <p>Description de ce qu'est un vin froid et comment l'identifier</p>
                                        </CardText>
                                    </Card>
                                    <Card>
                                        <CardMedia overlay={<CardTitle title="Argileux" />}>
                                            <img src="/image/sol.jpg" style={{height: 500}}/>
                                        </CardMedia >
                                        <CardText>
                                            <p>Description de ce qu'est un vin argileux et comment l'identifier</p>
                                        </CardText>
                                    </Card>
                                </div>
                            </Tab>
                            <Tab label="Carte" >
                                <div>
                                    <CardMedia overlay={<CardTitle title="Domaine de l'eau de là" />}>
                                        <MyMap />
                                    </CardMedia >
                                    <CardTitle title="Filtres :" subtitle="filtrer les calques" />
                                    <CardActions style={{ textAlign: "center" }}>
                                        <FlatButton label="En fonction des sépages" />
                                        <FlatButton label="En fonction des domaines" />
                                        <FlatButton label="En fonction des terroires" />
                                    </CardActions>
                                </div>
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
            </div>

        );
    }
}