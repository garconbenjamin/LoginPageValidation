import React, { useState, Fragment } from "react";
import LabeledInput from "./components/Input";
import AvatarCard from "./components/AvatarCard";
import { checkSame } from "./utils/utils";
const accountType = [
  { name: "doctor", avatarImg: "img_doctor_90@3x.svg" },
  { name: "patient", avatarImg: "img_patient_90@3x.svg" }
];

const App = () => {
  const [currentType, setCurrentType] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const checkLogin = () => {
    if (emailInput && passwordInput) {
      const isEmail = emailInput.indexOf("@") >= 0;
      const trimEmail = emailInput.slice(
        0,
        isEmail ? emailInput.indexOf("@") : emailInput.length
      );
      if (!checkSame([trimEmail, passwordInput], 6)) {
        alert("Valid Account.");
      } else {
        alert("Invalid Account.");
      }
    } else {
      alert("Please fill out the form.");
    }
  };
  return (
    <Fragment>
      <main className="signup-page">
        <section className="type-list ">
          <h2 className="center blue">Choose Account Type</h2>
          <div className="avatar-list">
            {accountType.map((ele, idx) => (
              <AvatarCard
                key={idx}
                idx={idx}
                info={ele}
                selected={currentType === idx}
                handleClick={() => setCurrentType(idx)}
              />
            ))}
          </div>
        </section>

        <section className="login-box">
          <h3 className="greeting center gray">
            Hello {accountType[currentType].name}! <br />
            Please fill out the form below to get started
          </h3>
          <form action="">
            <LabeledInput
              type={"email"}
              stateHook={[emailInput, setEmailInput]}
            />
            <LabeledInput
              type={"password"}
              stateHook={[passwordInput, setPasswordInput]}
            />
          </form>
          <div className="s-between d-flex">
            <div className="align-center d-flex d-gray">
              No account?
              <a style={{ paddingLeft: "0.5rem" }} href="/">
                Signup
              </a>
            </div>
            <div>
              <button className="button-primary" onClick={checkLogin}>
                Login
              </button>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default App;
