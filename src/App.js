import React from "react";
import "./styles.css";
import Fade from "./fade";
import { Transition } from "react-transition-group";

const duration = 500;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  position: "absolute",
  height: "100%",
  width: "50%",
  background:
    'url("https://www.dumpaday.com/wp-content/uploads/2018/09/photos-21-3.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  transform: "translateX(0%)",
  color: "white"
};

const transitionStyles = {
  entering: { transform: "translateX(0%)" },
  entered: { transform: "translateX(0%)" },
  exiting: { transform: "translateX(100%)" },
  exited: { transform: "translateX(100%)" }
};

const Overlay = ({ inProp }) => (
  <Transition in={inProp} timeout={duration}>
    {state => {
      console.log("state", state);
      return (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          className="overlay"
        >
          OVERLAY
        </div>
      );
    }}
  </Transition>
);
export default function App() {
  const [inProp, setInProp] = React.useState(true);

  const handleFunc = () => {
    setInProp(prevValue => {
      return !prevValue;
    });
  };

  return (
    <div className="App">
      <section className="login">
        LOGIN
        <br />
        <button onClick={handleFunc}>Click to signup</button>
      </section>

      <section className="signup">
        SIGNUP
        <br />
        <button onClick={handleFunc}>Click to login</button>
      </section>

      <Overlay inProp={inProp} />
      {/* <div className="overlay">OVERLAY {rightValue}</div> */}
    </div>
  );
}
