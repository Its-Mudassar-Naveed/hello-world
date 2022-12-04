import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>My favourite color is {color}</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("Green")}>Green</button>
    </div>
  );
};

export default Color;
