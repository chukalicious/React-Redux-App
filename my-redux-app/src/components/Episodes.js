import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getEpisodes } from "../actions";

const Episodes = (props) => {
  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/anime/30/episodes")
      .then((res) => props.getEpisodes(res.data.episodes))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h3>Episodes</h3>
      {props.episodes.map((episode) => (
        <div key={Date.now()}>
          <h3>
            Episode #:{episode.episode_id} {episode.title}
          </h3>
          <h4>{episode.title_japanese}</h4>
          <p>Air Date: {episode.aired}</p>
          <p>
            <strong>Discuss it here:</strong>{" "}
            <a href={episode.forum_url} target="_blank">
              {episode.forum_url}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    episodes: state.episodes,
  };
};

export default connect(mapStateToProps, { getEpisodes })(Episodes);
