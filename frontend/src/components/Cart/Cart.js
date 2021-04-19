import React from "react";
import data from "../../data";
import CartProduct from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-main">
        <h1>Cart</h1>
        <div className="cart-items">
          <CartProduct
            image={data.products[0].image}
            name={data.products[0].name}
            price={data.products[0].price}
            size="M"
          />
          <CartProduct
            image={data.products[1].image}
            name={data.products[1].name}
            price={data.products[1].price}
            size="M"
          />
        </div>
      </div>
      <div className="cart-summary">
        <div className="products-sum">
          <span>Product price</span>
          <span>{data.products[0].price}$</span>
        </div>
        <div className="delivery">
          <span>Delivery</span>
          <span>From 0,00</span>
        </div>
        <hr />
        <div className="cart-total">
          <span>Total</span>
          <span>50$</span>
        </div>
        <button>Go to checkout</button>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
