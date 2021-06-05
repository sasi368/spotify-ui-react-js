import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  //Run code based on a given conditions
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //console.log("user", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    console.log("I HAVE A TOKEN :", token);
  }, []);
  //console.log(user);
  console.log(token);
  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
