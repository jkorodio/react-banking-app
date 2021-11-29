import React, { useState, useEffect } from "react";

const Effects = () => {
  const [consoleType, setConsoleType] = useState("posts");
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${consoleType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  return (
    <div>
      <button onClick={() => setConsoleType("users")}>Users</button>
      <button onClick={() => setConsoleType("posts")}>Posts</button>
    </div>
  );
};

export default Effects;
