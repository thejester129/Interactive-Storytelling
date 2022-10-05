import React from "react";

const styles: any = {
  root: {
    width: 200,
    height: 300,
    borderRadius: 10,
    zIndex: 10,
    position: "absolute",
    top: "40vh",
    left: "40vw",
    backgroundColor: "black",
    color: "white",
    padding: 20,
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    marginTop: 50,
    height: 30,
    color: "green",
    cursor: "pointer",
  },
};

export default ({ text, open, onClose }: any) => {
  return (
    open && (
      <div style={styles.root}>
        <div>{text}</div>
        <div style={styles.button} onClick={onClose}>
          OKAY
        </div>
      </div>
    )
  );
};
