import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "../assets/css/components/Music.css"
import SpotifyPlayer from 'react-spotify-player';



const Music = () => {
  const CLIENT_ID = "51593957d43f4759bfb27cc6b4fa8e67";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState();
  let [search, setSearch] = useState("");
  const [artists, setArtists] = useState([]);

  const size = {
    width: '90%',
    height: 150,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  let logStatus;

  useEffect(() => {
    let hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((el) => el.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const handleClickEvent = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  if (!token) {
    logStatus = (
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        className="spotifySignIn"
      >
        LOGIN TO SPOTIFY
      </a>
      
      
    );
  } else {
    logStatus = <button onClick={logout}>logout</button>;
  }
  const searchArtist = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: search,
          type: "artist",
          limit: 6,
        },
      });
      setArtists(data.artists.items);
      // console.log(search);
      handleClickEvent();
    } catch (error) {
      console.log(error);
    }
  };
  // const getMusic= (uri) => {
  //   return(
  //     <SpotifyPlayer
  //     uri={uri}
  //     size={size}
  //     view={view}
  //     theme={theme}
  //   />)
    
  // }

  const showArtists = () => {
    console.log(artists);
    return artists.map((artist) => (
      <div key={artist.id}>
        {artist.images.length ? (
          <div className="musicCard">
            <a href={artist.external_urls.spotify}>
              <img className="artistImg" src={artist.images[0].url} alt="" />
            </a>
            {/* <button onClick={getMusic(artist.uri)}>get music</button> */}
            {/* <button onClick={getMusic(artist.uri)}> Get Music</button> */}
            <h3> {artist.name}</h3>
            <SpotifyPlayer
            token={token}
      uri={artist.uri}
      size={size}
      view={view}
      theme={theme}
    />
          </div>
        ) : (
          <div className="musicCard">
            <a href={artist.external_urls.spotify}>
              <p >{artist.name}</p>
            </a>
          </div>
        )}
       
      </div>
    ));
  };

  return (
    <div className="musicContianer">
     {logStatus}
      {token ? (
        <div>
        <div>
          <input
            type="text"
            onChange={handleClickEvent}
            id="searchArtistInput"
            className="searchBar"
          />
          <button onClick={searchArtist}>Search</button>
        </div>
      
    </div>
      ) : (
        // <h2>Please Login</h2>
        null
      )}
      
      <div className="artistContainer">
      {showArtists()}
      </div>
    </div>
  );
};
export default Music;
