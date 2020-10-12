import React from "react";
import CounterContainer from "./containers/CounterContainers";
import TodoContainer from "./containers/TodoContainer";

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
    </div>
  );
};

export default App;
