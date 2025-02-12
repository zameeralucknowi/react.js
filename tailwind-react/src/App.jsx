import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>  
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div
          className="h-15 w-70vw flex flex-wrap justify-center items-center space-x-4 p-4 bg-white"
        >
          <button className="border-2 bg-red-600 rounded w-15 p-2 cursor-pointer my-10 mx-10 " onClick={()=>setColor("red")}  >Red</button>
          <button className="border-2 bg-green-600 rounded w-15 p-2 cursor-pointer " onClick={()=>setColor("green ")}  >green</button>
          <button className="border-2 bg-blue-600 rounded w-15 p-2 cursor-pointer " onClick={()=>setColor("blue")} >blue</button>
          <button className="border-2 bg-orange-400 rounded w-15 p-2 cursor-pointer " onClick={()=>setColor("orange")} >orange</button>
          <button className="border-2   bg-gray-500    rounded w-15 p-2 cursor-pointer" onClick={()=>setColor("grey")}  >grey</button>
        </div>
      </div>
    </>
  );
}

export default App;
