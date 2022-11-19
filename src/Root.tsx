import "./App.css";
import ShoppingCart from "./components/svgs/initial/ShoppingCart";
import Title from "./components/svgs/initial/TextBehind";
import Cloud from "./components/svgs/initial/Cloud";

function Root() {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // 👇️ redirect to /contacts
    // navigate('/contacts');
  };

  return (
    <div className="App w-screen h-screen">
      {/* cloud 1 */}
      <div className="opacity-[38%] absolute w-1/3 -bottom-[5%] -left-[5%]">
        <Cloud />
      </div>
      {/* cloud 2 */}
      <div className="opacity-[19%] absolute w-1/3 top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2">
        <Cloud />
      </div>
      {/* cloud 3 */}
      <div className="opacity-[38%] absolute w-1/3 -right-[10%] -bottom-[10%]">
        <Cloud />
      </div>
      {/* Title */}
      <div className="absolute left-[10%] top-[10%] w-1/2">
        <Title />
        <form
          className="flex flex-col w-3/4 mt-4 ml-8 gap-2"
          onSubmit={handleSubmit}
        >
          <input
            className="py-2 px-5 rounded-xl text-[#E5AB13] placeholder:text-[#FFD15B]"
            placeholder="Kid's name here..."
          />
          <input
            className="py-2 px-5 rounded-xl text-[#E5AB13] placeholder:text-[#FFD15B]"
            placeholder="Address..."
          />
          <input
            className="py-2 px-5 rounded-xl text-[#E5AB13] placeholder:text-[#FFD15B]"
            placeholder="Parent's Phone Number..."
          />
          <button
            className="w-fit  text-white bg-[#478BF0] p-2 rounded-xl self-center text-xl"
            type="submit"
          >
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

export default Root;
