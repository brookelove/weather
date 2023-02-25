import axios from "axios";
import Music from "../components/Music";

export const searchArtist = async (e, target) => {
  e.preventDefault();
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: search,
        type: "artist",
      },
    });
    setArtists(data.artists.items);
  } catch (error) {
    throw error;
  }
};
