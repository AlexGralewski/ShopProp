import React from "react";
import ExpandableList from "../ExpandableList";
import data from "../../data"

const ProductCard = (props) => {
  const product = data.products.find(prod => prod.id === props.match.params.id);
  if (!product) {
    return(
      <h1>Product Not Found</h1>
      )
    }
  const { name, price, image } = product;
  return (
    <div className="product-card">
      <div className="gallery-description-wrapper">
        <div className="gallery">
          <ul>
            <li style={{ backgroundImage: `url(${image})` }} />
            <li style={{ backgroundImage: `url(${image})` }} />
            <li style={{ backgroundImage: `url(${image})` }} />
            <li style={{ backgroundImage: `url(${image})` }} />
            <li style={{ backgroundImage: `url(${image})` }} />
          </ul>
          <div
            className="big-picture"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="product-description">
          <div className="desc-expandable">
            <h2>Material</h2>
            <div className="desc-"></div>
          </div>
        </div>
      </div>
      <div className="product-card-info">
        <h3>{name}</h3>
        <h2>{price}$</h2>
        <p>Size</p>
        <ExpandableList width="400px" id="size" />
        <button className="black-button">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
