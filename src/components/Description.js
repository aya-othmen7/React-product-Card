import React from 'react';
//import of  the json object created previously
import product from '../product';

function Description() {
  return <p className="card-text">{product.description}</p>;
}

export default Description;
