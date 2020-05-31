import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Screens/Login";
import Join from "./Components/Screens/Join";
import Main from "./Components/Screens/Main";
import Search from "./Components/Screens/Search";
import Upload from "./Components/Screens/Upload";
import Community from "./Components/Screens/Community";
import MyPage from "./Components/Screens/MyPage";

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
