import React from "react"

const Product = props => {
  const {name, price, image} = props

  return(
    <div className="product-tile">
      <div className="image-wrap">
        <div className="product-image" style={{backgroundImage:`url(${image})`}} />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-Price">{price}$</div>
    </div>
)}


export default Product