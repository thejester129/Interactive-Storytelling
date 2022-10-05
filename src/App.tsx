import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Robot from "./Robot";
import DialogBubble from "./DialogBubble";
import Lives from "./Lives";
import Plug from "./Plug";
import { useEventListener } from "./useEventListener";
import Dialog from "./Dialog";
import Lightning from "./Lightning";

const styles: any = {
  root: {
    width: "100vw",
    height: "100vh",
  },
  background: {
    width: "100vw",
    height: "100vh",
  },
  dialogBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 5,
  },
};
function App() {
  const [robotx, setRobotX] = useState(1);
  const [lives, setLives] = useState(9999999);
  const [deadDialogOpen, setDeadDialogOpen] = useState(false);
  const [lightningVisible, setLightningVisible] = useState(false);

  const keyboardHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "ArrowLeft") {
      setRobotX(() => robotx - 1);
    }

    if (event.code === "ArrowRight") {
      setRobotX(() => robotx + 1);
    }
    if (event.code === "KeyX") {
      setLightningVisible(true);
      setTimeout(() => {
        setLightningVisible(false);
        setLives(lives - 1);
        setDeadDialogOpen(true);
      }, 2000);
    }
  };

  useEventListener("keydown", keyboardHandler);

  const plugInteract = robotx > 43 && robotx < 50;

  return (
    <div style={styles.root}>
      <img style={styles.background} src={require("./background1.jpg")} />
      <DialogBubble />
      <Robot x={robotx} />
      <Lives lives={lives} />
      <Plug interactOpen={plugInteract} />
      {deadDialogOpen && <div id="dialog-bg" style={styles.dialogBackground} />}
      {lightningVisible && <Lightning />}
      <Dialog
        open={deadDialogOpen}
        onClose={() => {
          setDeadDialogOpen(false);
          setRobotX(1);
        }}
        text={`Oh No, you died!             
         Only ${lives} lives left!`}
      />
    </div>
  );
}

export default App;
