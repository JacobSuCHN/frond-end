import React, { useState } from "react";
import "./style/index.css";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div onClick={() => setCount((c) => c + 1)}>
      <h1>{count}</h1>
    </div>
  );
};
