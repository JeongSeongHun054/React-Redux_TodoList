import React from "react";
import { Route, NavLink } from "react-router-dom";
import Profile from "./Profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/hun" active>
            Hun
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/seong">
            Seong
          </NavLink>
        </li>
      </ul>

      <Route path="/profiles/:username" exact component={Profile} />
    </div>
  );
};

export default Profiles;
