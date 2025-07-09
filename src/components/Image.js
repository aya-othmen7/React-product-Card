import React from 'react';
//import of  the json object created previously
import product from '../product';
import { Card } from 'react-bootstrap';

function Image() {
  return <Card.Img variant="top" src={product.image} alt={product.name} />;
}

export default Image;
