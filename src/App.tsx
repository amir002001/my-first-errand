import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShoppingCart from "./components/svgs/initial/ShoppingCart";
import Title from "./components/svgs/initial/TextBehind";

function App() {
  return (
    <div className="App w-screen h-screen">
      {/* Title */}
      <div className="absolute left-[10%] top-[10%] w-1/2">
        <Title />
      </div>
      {/* Shopping Cart */}
      <div className="absolute bottom-[10%] right-[10%] w-1/4">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
