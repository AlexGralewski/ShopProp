import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import Footer from "./components/Footer";
import Backdrop from "./components/SideMenu/Backdrop";
import Slider from "./components/Slider/Slider";
import ProductSection from "./components/Products/ProductSection";
import Cart from "./components/Cart/Cart";
import ProductCard from "./components/ProductCard/ProductCard";
import data from "./data";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen((prevState) => !prevState);

  let backdrop;
  if (isMenuOpen) {
    backdrop = <Backdrop openMenu={openMenu} />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar openMenu={openMenu} />
        <SideMenu isMenuOpen={isMenuOpen} />
        {backdrop}
        <Route exact path="/" component={() => <Slider />} />
        <Route exact path="/cart" render={() => <Cart />} />
        <Route exact path="/products" render={() => <ProductSection />} />
        <Route
          path="/product/:id"
          component={ProductCard}
        />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
