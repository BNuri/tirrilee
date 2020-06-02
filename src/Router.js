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
import Community from "./Screens/Community";
import WriteCommunity from "./Screens/WriteCommunity";
import MyPage from "./Screens/MyPage";
import EditMyPage from "./Screens/EditMyPage";

export default () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/join" exact component={Join} />
      <Route path="/main" exact component={Main} />
      <Route path="/search" exact component={Search} />
      <Route path="/community" exact component={Community} />
      <Route path="/community/write" exact component={WriteCommunity} />
      <Route path="/mypage" exact component={MyPage} />
      <Route path="/mypage/edit" exact component={EditMyPage} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
