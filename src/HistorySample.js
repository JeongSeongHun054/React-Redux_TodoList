import React, { useEffect } from "react";

const HistorySample = (props) => {
  const { history } = props;
  useEffect(() => {
    const unblock = history.block("페이지를 벗어나시겠습니까?");

    return () => {
      if (unblock) {
        unblock();
      }
    };
  });

  const handleGoBack = () => {
    history.goBack();
  };

  const handleGoHome = () => {
    history.push("/");
  };
  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default HistorySample;
