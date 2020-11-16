import React from "react";
import axios from "axios";

const Main = () => {
  const response = axios
    .get("https://api.jikan.moe/v3/anime/30")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  console.log(response);
  return (
    <div>
      <h2>This is the Main Component</h2>
    </div>
  );
};

export default Main;
