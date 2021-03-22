import React from "react";

// routes config
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

// config styled components
import { ThemeProvider } from "styled-components";
import { light } from "./styles/theme";
import GlobalStyle from "./styles/global";

// components to use in your routes
import Home from "./containers/Home";
import Forecast from "./containers/Forecast";

// json with routes path
import paths from "./routes/paths.json";

function App() {
  return (
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Home} path={paths.home} exact />
          <PrivateRoute component={Forecast} path={paths.forecast} exact />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
