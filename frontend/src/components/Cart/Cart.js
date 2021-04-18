import React from "react"
import data from "../../data"
import CartProduct from "./CartItem"

const Cart = () => {

  return(
    <div className="cart">
      <div className="cart-main">
        <h1>Cart</h1>
        <div className="cart-items">
          <CartProduct image={data.products[0].image} name={data.products[0].name} price={data.products[0].price}/>
        </div>
      </div>
      <div className="cart-summary">
        <div className="products-sum"></div>
        <div className="products-delivery"></div>
        <button>Go to checkout</button>
      </div>
      <div></div>
    </div>
  )
}

export default Cart