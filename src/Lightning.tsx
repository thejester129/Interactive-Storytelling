import React, { useEffect, useState } from "react";

const getStyles: any = (x: any, y: any) => ({
  root: {
    width: 70,
    height: 70,
    right: `${x}vw`,
    bottom: `${y}vh`,
    position: "absolute",
    zIndex: 10,
  },
  icon: {
    width: 100,
    height: 100,
    //animationName: bounce,
    //animationDuration: "1s",
  },
});
export default () => {
  const [x, setX] = useState(48);
  const [y, setY] = useState(25);
  const baseX = 45;
  const baseY = 23;

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    setInterval(() => {
      const x = baseX + randomIntFromInterval(-1, 1);
      const y = baseY + randomIntFromInterval(-1, 1);
      setX(x);
      setY(y);
    }, 50);
  }, []);
  const styles = getStyles(x, y);
  return (
    <div style={styles.root}>
      <img style={styles.icon} src={require("./lightning.png")} />
    </div>
  );
};
