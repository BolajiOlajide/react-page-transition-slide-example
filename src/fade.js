import { Transition } from "react-transition-group";
import React from "react";

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, color: "red" },
  exited: { opacity: 0 }
};

const Fade = ({ in: inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
);

export default Fade;
