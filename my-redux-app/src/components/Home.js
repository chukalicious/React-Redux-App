import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPictures } from "../actions";
import axios from "axios";

const Home = (props) => {
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/anime/30/pictures")
      .then((res) => props.getPictures(res.data.pictures))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {props.pictures.map((pic) => (
        <img src={pic.small} key={Date.now()} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pictures: state.pictures,
  };
};

export default connect(mapStateToProps, { getPictures })(Home);
