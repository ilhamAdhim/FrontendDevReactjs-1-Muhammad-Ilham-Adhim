import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import NotFound from "./components/NotFound";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/detail/:id">
            <DetailPage />
          </Route>
          <Route path="/Login">
            <LoginPage />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
