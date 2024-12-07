import { useState } from "react";

import * as styles from "@/App.module.scss";
import { Outlet } from "react-router-dom";

import AvatarPng from "@/assets/dog_png.png";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>webpack test</h1>

      <div>
        <img src={AvatarPng} alt="" />
      </div>

      <div>count: {count}</div>

      <div className={styles.stories}>
        <div className={styles.stories__wrapper}>storis wrapper</div>
      </div>

      <button
        className={styles.button}
        onClick={() => setCount((count) => count + 1)}
      >
        click
      </button>

      <Outlet />
    </>
  );
};

export default App;
