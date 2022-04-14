import GenreTag from "./GenreTag";

const GenreMax = (props) => {
  const checkGenre = () => console.log(props.artist);
  props.artist.genres = props.artist.genres.slice(0, 3);
  const genreMap = props.artist.genres.map((genre) => (
    <GenreTag key={`${genre}_${props.artist.name}`}>{genre}</GenreTag>
  ));

  return <div>{genreMap}</div>;
};
export default GenreMax;
