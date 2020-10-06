import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  hun: {
    name: "Seonghun",
    desc: "Developer",
  },
  seong: {
    name: "Jeongseong",
    desc: "main Charactor",
  },
};

const Profile = (props) => {
  const {
    match: {
      params: { username },
    },
  } = props;

  const profile = data[username];

  if (!profile) {
    return <div>존재하는 않는 사용자입니다!</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
