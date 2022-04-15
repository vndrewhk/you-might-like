import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const History = () => {
  const previousArtists = useSelector((state) => state.artists);
  const [artistHistory, setArtistHistory] = useState(previousArtists);

  const previousArtistsClicked = artistHistory.artistHistory.map((artist) => {
    return <>{artist.name}</>;
  });

  const checkVals = () => {
    console.log(artistHistory.artistHistory);
  };

  return (
    <div>
      <button onClick={checkVals}>click here :D </button>
      {previousArtistsClicked}
    </div>
  );
};

export default History;
