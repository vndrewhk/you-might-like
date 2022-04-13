import { useState } from "react";

const ArtistSuggestions = (props) => {
  // onClick, redo original fn with new artist
  const [artists, setArtists] = useState(props.artists);
  const fetchSimilarArtists = async (id) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/artists/${id}/related-artists`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem(
              "token_type"
            )} BQDi3lbAYnHMTgIFa0H5kDpIaEY8Q7SWBwpy0njumVu-Am8z-ptH92t1_sy58MVFbXMEITTTS8UpG3nzc9kewY4Tzqco2pT7xi6QCdypYp6CD1NPVFl-3T85lIEfxUiRR30OfCQEgYxYOlEkWPyBEu4`,
            // "Bearer BQAvvYzy5kWu8kV3U7zBH5XCvIxBK9Ap3d35K0JstHe6zAb48USZb3SL-womw1-zKmU7mO_147JoHN02EQyTAXb5OlCFylM9Zm3hii5FxfQfgRBG53dG5bwOcnfFcAAI6I2pCtsALXdT0pURin-TkJI",
          },
        }
      );
      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const data = await response.json();
      setArtists(data.artists);
    } catch (err) {
      console.log(err);
    }
  };
  const clickNewArtist = (id) => {
    // console.log(id);
    fetchSimilarArtists(id);
  };
  const artistBubbles = artists.map((artist) => (
    <div key="artist.id">
      {/* <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      > */}
      <h5 onClick={clickNewArtist.bind(null, artist.id)}>{artist.name}</h5>
      {/* </a> */}
      <h6>Genres:</h6>
      <p>
        {artist.genres.map((genre) => (
          <>{genre}</>
        ))}
      </p>
    </div>
  ));
  return <div>{artistBubbles}</div>;
};

export default ArtistSuggestions;
