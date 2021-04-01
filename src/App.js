import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/videos")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div className="App"></div>;
}

export default App;
