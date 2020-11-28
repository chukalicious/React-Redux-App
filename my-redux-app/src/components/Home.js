import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPictures } from "../actions";
import axios from "axios";

const Home = (props) => {
  console.log("props inside the Home component: ", props);
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/anime/30/pictures")
      .then((res) => props.getPictures(res.data.pictures))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div key={Date.now()}>
      {props.pictures.map((pic) => (
        <img src={pic.small} />
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
