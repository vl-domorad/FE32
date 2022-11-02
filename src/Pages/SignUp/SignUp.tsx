import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import FormContainer from "../../Components/FormContainer";
import Input from "../../Components/Input";
import Button, { ButtonTypes } from "../../Components/Button";
import { PathNames } from "../Router/Router";
import styles from "./SignUp.module.css";

const SignIn = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  return (
    <FormContainer title={"Sign Up"}>
      <>
        <div className={styles.inputsContainer}>
          <Input
            title={"Name"}
            placeholder={"Your name"}
            value={name}
            onChange={(value: string) => setName(value)}
          />
          <Input
            title={"Email"}
            placeholder={"Your email"}
            value={login}
            onChange={(value: string) => setLogin(value)}
          />
          <Input
            title={"Password"}
            placeholder={"Your password"}
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Input
            title={"Confirm Password"}
            placeholder={"Confirm password"}
            value={passwordConfirmation}
            onChange={(value: string) => setPasswordConfirmation(value)}
          />
        </div>
        <Button
          title={"Sign Up"}
          type={ButtonTypes.Primary}
          onClick={() => {}}
          className={styles.button}
        />
        <div className={styles.signUpRedirectContainer}>
          {"Already have an account?"}{" "}
          <NavLink to={PathNames.SignIn} className={styles.redirectButton}>
            {"Sign In"}
          </NavLink>
        </div>
      </>
    </FormContainer>
  );
};

export default SignIn;
