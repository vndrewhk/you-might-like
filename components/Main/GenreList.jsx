import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GenreList = () => {
  const genreInfo = useSelector((state) => state.artists.genres);

  const [genres, setGenres] = useState(null);

  useEffect(() => {
    let tempGenres = [];
    Object.keys(genreInfo).forEach((key) => {});
    setGenres("test");
  }, []);

  return <div>Genres</div>;
};
