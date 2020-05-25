import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./Components/User/Dashboard";
import Signin from "./Components/Forms/Signin";
import { ProtectedRoute } from "./routes";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/signin"
          render={() => <Signin setIsAuthenticated={setIsAuthenticated} />}
        />
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          exact
          paths={["/", "/dashboard"]}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
