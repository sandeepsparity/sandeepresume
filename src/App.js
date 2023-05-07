// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { PrivateRoute } from "./components/PrivateRoute";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map((route) => {
          {
            if (route.private) {
            return (
              <PrivateRoute
                key={route.path}
                exact={route.exact}
                path={route.path}
                element={route.component}
              />
            );
          } 
          }
          return (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
