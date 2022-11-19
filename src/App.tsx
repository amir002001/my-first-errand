import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ShoppingCart from "./components/svgs/initial/ShoppingCart";
import Title from "./components/svgs/initial/TextBehind";

function App() {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // 👇️ redirect to /contacts
    // navigate('/contacts');
  };

  return (
    <div className="App w-screen h-screen">
      {/* Title */}
      <div className="absolute left-[10%] top-[10%] w-1/2">
        <Title />
        <form
          className="flex flex-col w-4/5 mt-4 ml-8 gap-2"
          onSubmit={handleSubmit}
        >
          <input className="py-1.5 px-5 rounded-lg text-[#E5AB13] placeholder:text-[#FFD15B]" placeholder="Kid's name here" />
          <input className="py-1.5 px-5 rounded-lg text-[#E5AB13] placeholder:text-[#FFD15B]" placeholder="Address" />
          <input className="py-1.5 px-5 rounded-lg text-[#E5AB13] placeholder:text-[#FFD15B]" placeholder="Parent's Phone Number" />
          <button className="w-fit  text-white bg-[#478BF0] p-2 rounded-lg self-center" type="submit">
            Let's Go!
          </button>
        </form>
      </div>
      {/* Shopping Cart */}
      <div className="absolute bottom-[10%] right-[10%] w-1/4">
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
