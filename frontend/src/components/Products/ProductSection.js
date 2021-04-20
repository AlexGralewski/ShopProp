import React from "react"
import data from "../../data"
import ProductTile from "./ProductTile"


const ProductSection = () => (
  <div className="product-section">
    {
      data.products.map((item) => 
        <ProductTile 
          product={item}
          key={item.id} />
      )
    }
  </div>
)

export default ProductSection