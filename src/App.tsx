import { useState } from "react";

import "./App.scss";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>webpack test</h1>

      <div>count: {count}</div>

      <button onClick={() => setCount((count) => count + 1)}>click</button>
    </>
  );
};

export default App;
