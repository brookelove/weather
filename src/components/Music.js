import { useEffect, useState } from "react";
import React from "react";

const Music = () => {
  const CLIENT_ID = "51593957d43f4759bfb27cc6b4fa8e67";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState();
  let logStatus;

  useEffect((effect) => {
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
      setToken(token);
    }
  });
  if (!token) {
    logStatus = (
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        login to spodify
      </a>
    );
  } else {
    logStatus = <a>log out?</a>;
  }
  return (
    <div>
      <h1>Music</h1>
      {/* <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        login to spodify
      </a> */}
      {logStatus}
    </div>
  );
};
export default Music;
