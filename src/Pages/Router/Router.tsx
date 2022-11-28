import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWrapper";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  AddPost = "/posts/add",
  RegistrationConfirmation = "/sign-up/confirm",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
}

const RegistrationConfirmation = () => {
  const { state } = useLocation();
  return <div>{state?.email || ""}</div>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route
            path={PathNames.RegistrationConfirmation}
            element={<RegistrationConfirmation />}
          />
        </Route>
        <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
