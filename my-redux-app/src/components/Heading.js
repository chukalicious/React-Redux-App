import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div>
      <h2>Neon Genesis Evangelion</h2>
      <Link to="/">
        <div>Home</div>
      </Link>

      <Link to="/characters">
        <div>Characters</div>
      </Link>
      <Link to="/episodes">
        <div>Episodes</div>
      </Link>
    </div>
  );
};

export default Heading;
