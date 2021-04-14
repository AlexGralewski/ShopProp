import React from "react"

const Product = props => (
  
  <div className="product">
    <img className="product-image" src={props.image} alt="Product Photo" />
    <div className="product-name">Some T-shirt</div>
    <div className="product-Price">55.00$</div>
  </div>
)