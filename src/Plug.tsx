import React from "react";
const styles: any = {
  root: {
    width: 100,
    right: "45vw",
    bottom: "25vh",
    position: "absolute",
    zIndex: 1,
    fontSize: 20,
    textAlign: "right",
  },
  innerLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  icon: { width: 50, height: 50 },
  interact: {
    borderRadius: 10,
    backgroundColor: "gray",
    width: 150,
    height: 50,
    marginBottom: 20,
    color: "white",
    textAlign: "center",
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
};

export default ({ interactOpen }: any) => {
  return (
    <div style={styles.root}>
      <div style={styles.innerLayout}>
        {interactOpen && <div style={styles.interact}>Press X to interact</div>}
        <img style={styles.icon} src={require("./plug.png")} />
      </div>
    </div>
  );
};
