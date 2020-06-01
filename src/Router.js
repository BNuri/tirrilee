import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Screens/Login";
import Join from "./Screens/Join";
import Main from "./Screens/Main";
import Search from "./Screens/Search";
import Upload from "./Screens/Upload";
import Community from "./Screens/Community";
import MyPage from "./Screens/MyPage";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/join" exact component={Join} />
      <Route path="/main" exact component={Main} />
      <Route path="/search" exact component={Search} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/community" exact component={Community} />
      <Route path="/mypage" exact component={MyPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
