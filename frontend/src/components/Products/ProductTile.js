import React from "react"
import {Link} from "react-router-dom"

const Product = props => {
  const {product} = props

  return(
    <Link to={`/product/${product.id}`}>
      <div className="product-tile">
        
        <div className="image-wrap">
          <div className="product-image" style={{backgroundImage:`url(${product.image})`}} />
        </div>
        <div className="product-name">{product.name}</div>
        <div className="product-Price">{product.price}$</div>
      </div>
    </Link>
)}


export default Product