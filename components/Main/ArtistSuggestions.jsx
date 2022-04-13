const ArtistSuggestions = (props) => {
  const artistBubbles = props.artists.items.map((artist) => (
    <div key="artist.id">
      <a
        href={artist.external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5>{artist.name}</h5>
      </a>
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
