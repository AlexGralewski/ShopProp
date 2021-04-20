import React from "react";
import ExpandableList from "../ExpandableList";

const Product = (props) => {
  const { name, price, image, size } = props;

  return (
    <div className="cart-product">
      <div className="cp-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="cp-container">
        <div className="cp-top">
          <div className="cp-info">
            <h2>{name}</h2>
            <p>Size: {size}</p>
          </div>
          <button className="cp-remove">
            <i className="fas fa-trash"></i>
            <p>Remove</p>
          </button>
        </div>
        <div className="cp-bottom">
          <ExpandableList width="200px" id="quantity" />
          <p>{price}$</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
