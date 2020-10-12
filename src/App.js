import React from "react";
import CounterContainer from "./containers/CounterContainers";
import TodoContainer from "./containers/TodosContainer";

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
