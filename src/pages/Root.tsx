import ShoppingCart from "../components/svgs/Root/ShoppingCart";
import Title from "../components/svgs/Root/TextBehind";
import Cloud from "../components/svgs/Root/Cloud";
import { collection, query, onSnapshot, doc, setDoc, addDoc } from "firebase/firestore";
import { useState } from "react"; 
import { db } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";


function Root() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("") 
  const [parentNumber, setParentNumber] = useState("") 
  const navigate = useNavigate();


  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
      try {
        const docRef = await addDoc(collection(db, "users"), {
          name: name, 
          address: address, 
          parentNumber: parentNumber
        });    
        localStorage.setItem("userId", docRef.id) 

      }catch (e) {
        console.log("Error: " + e) 
      } 
      
    setName("")
    setAddress("")
    setParentNumber("")

    navigate("/paths");
  };
  
  return (
    <div className="w-screen h-screen">
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
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            className="py-2 px-5 rounded-xl text-[#E5AB13] placeholder:text-[#FFD15B]"
            placeholder="Address..."
            onChange={(e) => setAddress(e.target.value)}
            value={address}


          />
          <input
            className="py-2 px-5 rounded-xl text-[#E5AB13] placeholder:text-[#FFD15B]"
            placeholder="Parent's Phone Number..."
            onChange={(e) => setParentNumber(e.target.value)}
            value={parentNumber}


          /> 
            <Link to="paths" className="w-fit  text-white bg-[#478BF0] p-2 rounded-xl self-center text-xl" onClick={handleSubmit} > 
            Let's Go!
            </Link>
          
     
         
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
