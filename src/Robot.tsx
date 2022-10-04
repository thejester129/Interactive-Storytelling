import React, { useState } from "react";
import { useEventListener } from "./useEventListener";
const getStyles: any = (x: any) => ({
  root: {
    width: 100,
    height: 100,
    zIndex: 10,
    bottom: "20vh",
    left: `${x}vw`,
    position: "absolute",
  },
});

export default ({ x }: any) => {
  const styles = getStyles(x);

  return (
    <div tabIndex={0}>
      <img style={styles.root} src={require("./robot.png")} />
    </div>
  );
};
