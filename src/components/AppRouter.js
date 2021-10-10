import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/constants";
import { isLoggedIn } from "../utils/constants";

const AppRouter = () => {
  const routesArr = isLoggedIn ? privateRoutes : publicRoutes;

  return (
    <Switch>
      {routesArr.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={isLoggedIn ? CHAT_ROUTE : LOGIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
