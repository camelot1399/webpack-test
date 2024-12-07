import { useState } from "react";

import * as styles from "@/App.module.scss";
import { Outlet } from "react-router-dom";

import avatarPng from "@/assets/dog_png.png";
import avatarJpg from "@/assets/dog_jpg.jpg";

import AvatarSVG2 from "@/assets/Vector.svg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>PLATFORM: {__PLATFORM__}</h1>

      <div>
        <img src={avatarPng} width={100} alt="" />
        <img src={avatarJpg} width={100} alt="" />
      </div>

      <div>
        <AvatarSVG2 />
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
