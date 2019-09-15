import React, { useState } from "react";

export const defaultState = { key: 0 };

export const useKey = () => {
  const [state, setState] = useState(defaultState);

  return {
    ...state,
    onIncreaseCounter() {
      setState({ ...state, key: state.key + 1 }, () => {
        console.log("++++++++++++++++++");
      });
    },
    onDecreaseCounter() {
      setState({ ...state, key: state.key - 1 }, () => {
        console.log("++++++++++++++++++");
      });
    }
  };
};
