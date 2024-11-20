import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <p>API Working</p>
      <h1>Carousel Images are working at this time</h1>
      <BrowserRouter>
        <ShopContextProvider>
          <Navbar />
        </ShopContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
