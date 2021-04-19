import React from "react"

const ProductCard = props => {
  const { name, price, image, size } = props;
  return(
    <div className="product-card">
      <div className="gallery" >
        <ul>
          <li style={{ backgroundImage: `url(${image})` }} />
          <li style={{ backgroundImage: `url(${image})` }} />
          <li style={{ backgroundImage: `url(${image})` }} />
          <li style={{ backgroundImage: `url(${image})` }} />
          <li style={{ backgroundImage: `url(${image})` }} />
        </ul>
        <div 
        className="big-picture"
        style={{ backgroundImage: `url(${image})` }}>

        </div>
      </div>
      <div className="product-card-info">
        <h3>{name}</h3>
        <h2>{price}$</h2>
        <p>Size</p>
        <button>Add to cart</button>
      </div>
      <div className="product-description">

      </div>
    </div>
  )
}

export default ProductCard