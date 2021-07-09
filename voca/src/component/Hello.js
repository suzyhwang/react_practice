import "./Hello.css";
import { useState } from "react";
import UserName from "./UserName";

const Hello = ({ age }) => {
  //   let name = "Mike";
  const [name, setName] = useState("Jane");
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";
  return (
    <div>
      <h1>state</h1>
      <h2 id="name">
        {name} ({age}) : {msg}
      </h2>
      <UserName name={name} />
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
