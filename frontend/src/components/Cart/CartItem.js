import React from "react"

const Product = props => {
  const {name, price, image, size} = props

  return(
    <div className="cart-product">
      <div className="cp-image" style={{backgroundImage:`url(${image})`}} />
      <div className="cp-info">
        <div className="cp-name">{name}</div>
        <div className="cp-size">{size}</div>
        <div className="cp-qty">1</div>

      </div>
      <div>
        <button className="cp-remove">
          <i className="fas fa-trash"></i>
          <p>Remove</p>
        </button>
        <div className="cp-price">{price}$</div>
      </div>
    </div>
)}


export default Product