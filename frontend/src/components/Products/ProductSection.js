import React from "react"
import data from "../../data"
import ProductTile from "./ProductTile"


const ProductSection = () => (
  <div className="product-section">
    {
      data.products.map((item,index) => 
        <ProductTile 
          name={item.name}  
          price={item.price}  
          rating={item.rating}  
          image={item.image}  
          key={index} />
      )
    }
  </div>
)

export default ProductSection