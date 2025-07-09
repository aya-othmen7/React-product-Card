import React from 'react';
//import of  the json object created previously
import product from '../product';

function Price() {
  return <p className="card-text text-success fw-bold">{product.price}</p>;
}

export default Price;
