import React, {useState} from "react"
import Navbar from "./components/Navbar"
import SideMenu from "./components/SideMenu/SideMenu"
import Footer from "./components/Footer"
import Backdrop from "./components/SideMenu/Backdrop"
import Slider from "./components/Slider/Slider"
import ProductSection from "./components/Products/ProductSection"


function App() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const openMenu = () => setMenuOpen(prevState => !prevState)

  let backdrop
  if (isMenuOpen) {
    backdrop = <Backdrop openMenu={openMenu}/>
  } 


  return (
    <div className="app">
      <Navbar 
        openMenu = {openMenu}
      />
      <SideMenu 
        isMenuOpen = {isMenuOpen}
      />
      {backdrop}
      <Slider />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
