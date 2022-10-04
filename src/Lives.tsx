import React from "react";
const styles: any = {
  root: {
    width: 250,
    right: 40,
    height: 70,
    bottom: 50,
    position: "absolute",
    zIndex: 1,
    fontSize: 20,
    textAlign: "right",
  },
  lives: { width: 20, height: 20 },
};

export default ({ lives }: any) => {
  return (
    <div style={styles.root}>
      {"Lives: "}
      <img style={styles.lives} src={require("./lives.png")} />
      {` ${lives}`}
    </div>
  );
};
