import React from "react";

function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div onClick={props.holdDice} style={styles} className="die-face">
      <h1 className="die-num">{props.value}</h1>
    </div>
  );
}

export default Die;
