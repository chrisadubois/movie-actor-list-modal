export const ActorList = ({ actors, movie }) => {
  return (
    <div>
      <div>Actor List:</div>
      <ul>
        {Object.keys(actors).map((keyI, i) => {
          return (
            <li key={`${keyI}-${i}`}>
              <div>{keyI}</div>
              <ul>
                {Object.keys(actors[keyI]).map((keyJ, j) => {
                  return <li key={`${keyJ}-${j}`}>{actors[keyI][keyJ]}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
