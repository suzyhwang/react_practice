import "./Hello.css";
import { useState } from "react";

const Hello = () => {
  //   let name = "Mike";
  const [name, setName] = useState("Jane");

  return (
    <div>
      <h1>state</h1>
      <h2 id="name">{name}</h2>
      <button
        onClick={() => {
          setName(name === "Mike" ? "Jane" : "Mike");
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Hello;
