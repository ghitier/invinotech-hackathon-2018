import React from 'react';
import { CardHeader } from 'material-ui/Card';

export default function Header() {
  return (
    <CardHeader
      title="Nom du vin"
      subtitle="taste good!"
      avatar="/image/wineBottle.jpg" />
  );
}