import { ActorList } from "./components/ActorList";
import { MovieModal } from "./components/MovieModal";
import { data, processData } from "./utils/data";
import "./styles.css";
import { useEffect, useState } from "react";

const App = () => {
  const [actors, setActors] = useState({});
  const [movies, setMovies] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(undefined);

  useEffect(() => {
    const { actors, movies } = processData(data);
    setActors(actors);
    setMovies(movies);
  }, []);

  return (
    <div className="App">
      <div className="movie-app-container">
        <h1>My Movie App</h1>
        <ActorList actors={actors} movie={currentMovie} />
        <button onClick={setModalOpen}>Open Modal</button>
        {modalOpen && (
          <MovieModal
            movies={movies}
            close={() => setModalOpen(false)}
            current={setCurrentMovie}
          />
        )}
      </div>
    </div>
  );
};

export default App;
