import React from "react";

function Food(name) {
  return <h1>I Like POTATO!!!!</h1>;
}

function App() {
  return (
    <div>
      <h1>HELLO~</h1>
      <Food fav="kimchi" />
    </div>
  );
}

export default App;
