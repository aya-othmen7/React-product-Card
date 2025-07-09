//import of  the json object created previously
import product from '../product';
import React from 'react';

function Name() {
  return <h5 className="card-title">{product.name}</h5>;
}

export default Name;
