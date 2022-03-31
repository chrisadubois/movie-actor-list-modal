import { useState } from "react";

export const MovieModal = ({ movies, close, index }) => {
  const movieSize = Object.keys(movies).length;

  const [movieIndex, setMovieIndex] = useState(index || 0);

  const move = (direction) => {
    const temp = movieIndex + direction;
    if (temp >= movieSize) {
      setMovieIndex(0);
    } else if (temp < 0) {
      setMovieIndex(movieSize - 1);
    } else {
      setMovieIndex(temp);
    }
  };

  return (
    <div>
      <button onClick={close}>close</button>
      <div className="modal movie-modal">
        <div className="modal-content">
          <div>{movies[movieIndex]}</div>
        </div>
        <div className="modal-footer">
          <button onClick={() => move(-1)}>Previous Movie</button>
          <button onClick={() => move(1)}>Next Movie</button>
        </div>
      </div>
    </div>
  );
};
