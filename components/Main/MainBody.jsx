import SearchBox from "../Search/SearchBox";

const MainBody = () => {
  const submitArtistHandler = (searchInput, e) => {
    e.preventDefault();
    console.log(e)
    console.log(searchInput.current.value);
    console.log("hi");
  };

  return (
    <div className="main-body">
      Main Body
      <SearchBox submitArtistHandler={submitArtistHandler}></SearchBox>
    </div>
  );
};

export default MainBody;
