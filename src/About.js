import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const showDetail = query.detail === "true";
  return (
    <div>
      <h1>About</h1>
      <p>Router About Page</p>
      {showDetail ? (
        <p>detail의 값이 True 맞습니단</p>
      ) : (
        <p>detail의 값이 True가 아닙니다.</p>
      )}
    </div>
  );
};

export default About;
