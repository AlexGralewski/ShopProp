import React from "react"
import Navbar from "./components/Navbar"
import SideMenu from "./components/SideMenu/SideMenu"
import Footer from "./components/Footer"
import Backdrop from "./components/SideMenu/Backdrop"


function App() {

  return (
    <div className="app">
      <Navbar 
        
      />
      <SideMenu />
      <Backdrop 
        />
      <Footer />
    </div>
  );
}

export default App;
