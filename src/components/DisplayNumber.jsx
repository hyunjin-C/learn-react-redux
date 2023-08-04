import React, { useState, useEffect } from "react";
import store from "../store";

export const DisplayNumber = () => {
  const [number, setNumber] = useState(0);
  const state = { number: store.getState().number };

  useEffect(() => {
    store.subscribe(() => {
      setNumber(store.getState().number);
    });
  });

  return (
    <div>
      <h1>Display Number</h1>
      <input type="text" value={state.number} readOnly></input>
    </div>
  );
};
