import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Main, Product } from "../../views";

const RouteRender = ({ ...rest }) => {
  return (
    <Route {...rest} />
  );
};

const Router = params => {
  const routes = [
    { path: "/", exact: true, component: Main },
    { path: "/products/:id", exact: true, component: Product },
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
