import React, { useEffect } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PostFormPage from "../PostFormPage";
import PagesWrapper from "../PagesWrapper";
import { useDispatch, useSelector } from "react-redux";
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import { getUserData } from "../../Redux/Reducers/authReducer";
import ContentPage from "../ContentPage";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  AddPost = "/posts/add",
  RegistrationConfirmation = "/sign-up/confirm",
  ContentPage = "/content/:id",
  EditPost = "/content/:id/edit",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
}

const RegistrationConfirmation = () => {
  const { state } = useLocation();
  return <div>{state?.email || ""}</div>;
};

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getUserData());
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.ContentPage} element={<ContentPage />} />
          <Route
            path={PathNames.AddPost}
            element={
              isLoggedIn ? <PostFormPage /> : <Navigate to={PathNames.SignIn} />
            }
          />
          <Route
            path={PathNames.EditPost}
            element={
              isLoggedIn ? <PostFormPage /> : <Navigate to={PathNames.SignIn} />
            }
          />
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
