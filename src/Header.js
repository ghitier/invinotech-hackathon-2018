import React from 'react';
import { compose, withProps } from 'recompose';
import Avatar from 'material-ui/Avatar';
import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MyMap from './Map';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div style={{ maxWidth: "1080px", margin: "auto" }}>
                    <Card >
                        <CardHeader
                            title="Nom du vin"
                            subtitle="taste good!"
                            avatar="/image/wineBottle.jpg"
                            size="100px" />
                        <Tabs>
                            <Tab label="Caractère" >
                                <div>
                                    <CardText>
                                        <h2 style={styles.headline}>Caractère</h2>
                                        <p> This is another example tab.</p>
                                    </CardText>
                                    <Slider name="slider0" defaultValue={0.5} />
                                    <CardHeader
                                        title="photos"
                                        size="100px" />
                                    <Card>
                                        <CardMedia overlay={<CardTitle title="Terres d'ici" />}>
                                            <img src="/image/sol.jpg" style={{ width: 500 }} />
                                        </CardMedia >
                                    </Card>
                                </div>
                            </Tab>
                            <Tab label="Carte" >
                                <div>
                                    {/* <h2 style={styles.headline}>Carte</h2> */}
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
                            <Tab label="Description">
                                <div>
                                    <h2 style={styles.headline}>Blablabla</h2>
                                    <p> This is another example tab.</p>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                                    pellentesque lobortis odio. </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </Card>
                </div>
            </div>

        );
    }
}