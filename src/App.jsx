import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";
import ImageCarousel from "./Components/ImageCarousel";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <p>API Working</p>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
          <ImageCarousel />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
