import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Register } from "../../views";

const RouteRender = ({ ...rest }) => {
  return (
    <Route {...rest} />
  );
};

const Router = params => {
  const routes = [
    { path: "/", exact: true, component: Main },
    { path: "/register", exact: true, component: Register },
  ];

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(route => (
          <RouteRender
            key={route.path}
            {...route}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
