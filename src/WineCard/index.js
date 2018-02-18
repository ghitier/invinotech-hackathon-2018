import React from 'react';
import { Card } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';

import Header from './Header';
import DataSheet from './DataSheet';
import Characteristics from './Charcteristics';
import Map from './Map';

export default function WineCard() {
  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <Card>
        <Header />
        <Tabs>
          <Tab label="Fiche technique">
            <DataSheet />
          </Tab>
          <Tab label="Caractéristiques">
            <Characteristics />
          </Tab>
          <Tab label="Carte">
            <Map />
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
}