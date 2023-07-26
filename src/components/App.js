import React from "react";
import blogData from "../data/blog";
import Header from "./Header";

console.log(blogData);

function App() {
  const blogName = blogData.name;

  return (
    <div className="App">
      <header name={blogName} />
    </div>
  );
}

export default App;
