import { useState } from "react";
import "./styles.css";

export default function App() {
  const animationList = [
    { name: "Big Hero 6", rating: "10/10" },
    { name: "Minion", rating: "9/10" },
    { name: "Coco", rating: "8/10" }
  ];

  const fantasyList = [
    { name: "Harry Potter Series", rating: "10/10" },
    { name: "Night At the Museum", rating: "7/10" },
    { name: "Aladdin", rating: "7/10" }
  ];

  const comedyList = [
    { name: "Robin-B-Hood", rating: "10/10" },
    { name: "Monster Hunt", rating: "9/10" },
    { name:"The Boss Baby", rating:"8/10"}
  ];

  var [movies, setMovies] = useState(animationList);

  function listAnimatedMovies() {
    for (var i = 0; i < animationList.length; i++) {
      setMovies(animationList);
    }
  }

  function listFantasyMovies() {
    for (var i = 0; i < fantasyList.length; i++) {
      setMovies(fantasyList);
    }
  }

  function listComedyMovies() {
    for (var i = 0; i < comedyList.length; i++) {
      setMovies(comedyList);
    }
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="icon">
          📽️
        </span>{" "}
        Rewatchable Movies
      </h1>
      <p>Select the below option to see my favorites </p>
      <button className="btn" onClick={listAnimatedMovies}>
        Animated
      </button>
      <button className="btn" onClick={listFantasyMovies}>
        Fantasy
      </button>
      <button className="btn" onClick={listComedyMovies}>
        Comedy
      </button>
      <hr className="line" />
      <div>
        {movies.map((movie) => {
          return (
            <div className="movieContainer">
              <h5 className="movieName">{movie.name}</h5>
              <br />
              {movie.rating}
            </div>
          );
        })}
      </div>
    </div>
  );
}
