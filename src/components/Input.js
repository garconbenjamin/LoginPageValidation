import React from "react";
import { Lock, Mail } from "./Icon";
const types = {
  email: {
    icon: <Mail />,
    placeholder: "Email",
    labelText: "Email",
    subLabel: null
  },
  password: {
    icon: <Lock />,
    placeholder: "Password",
    labelText: "Password",
    subLabel: { text: "Forgot?", link: "/" }
  }
};
const LabeledInput = props => {
  const { type, stateHook } = props;
  const setState = stateHook[1];
  const state = stateHook[0];
  const { icon, placeholder, labelText, subLabel } = types[type];

  const handleChange = e => {
    const trimValue = e.target.value.trim();
    setState(trimValue);
  };
  return (
    <div className="input-container">
      <div className="icon-box">{icon}</div>
      <input
        className="labeled"
        type={type === "password" ? "password" : "text"}
        placeholder={placeholder}
        onChange={e => handleChange(e)}
        value={state}
      />

      <div className="upper-label">{labelText}</div>

      {subLabel ? (
        <div className="sub-label">
          <a href="/">Forgot?</a>
        </div>
      ) : null}
    </div>
  );
};
export default LabeledInput;
