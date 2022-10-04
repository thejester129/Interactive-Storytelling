import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Robot from "./Robot";
import DialogBubble from "./DialogBubble";
import Lives from "./Lives";
import Plug from "./Plug";
import { useEventListener } from "./useEventListener";

const styles = {
  root: {
    width: "100vw",
    height: "100vh",
  },
  background: {
    width: "100vw",
    height: "100vh",
  },
};
function App() {
  const [robotx, setRobotX] = useState(1);
  const [lives, setLives] = useState(9999999);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "ArrowLeft") {
      setRobotX(() => robotx - 1);
    }

    if (event.code === "ArrowRight") {
      setRobotX(() => robotx + 1);
    }
    if (event.code === "KeyX") {
      setLives(lives - 1);
    }
  };

  useEventListener("keydown", keyboardHandler);

  const plugInteract = robotx > 40 && robotx < 53;

  return (
    <div style={styles.root}>
      <img style={styles.background} src={require("./background1.jpg")} />
      <DialogBubble />
      <Robot x={robotx} />
      <Lives lives={lives} />
      <Plug interactOpen={plugInteract} />
    </div>
  );
}

export default App;
