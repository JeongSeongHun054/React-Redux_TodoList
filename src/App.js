import React, { useState } from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = (category) => {
    setCategory(category);
    console.log(category);
  };
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
