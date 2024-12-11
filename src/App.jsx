import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("green");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-red-600 rounded-lg"
            onClick={() => setColor("red")}
          >
            red
          </button>
        </div>
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-blue-700 rounded-lg"
            onClick={() => setColor("blue")}
          >
            blue
          </button>
        </div>
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-orange-800 rounded-lg"
            onClick={() => setColor("orange")}
          >
            orange
          </button>
        </div>
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-violet-700 rounded-lg"
            onClick={() => setColor("violet")}
          >
            violet
          </button>
        </div>
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-pink-700 rounded-lg"
            onClick={() => setColor("pink")}
          >
            pink
          </button>
        </div>
        <div className="bg-white rounded-lg m-1 text-white pt-1 pr-3 pl-3">
          <button
            className="m-1 p-1 bg-black rounded-lg"
            onClick={() => setColor("black")}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
