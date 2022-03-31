export const data = [
  {
    name: "Inception",
    cast: ["Leonardo Dicaprio", "Joseph Gordon-Levitt", "Elliot Page"]
  },
  { name: "Catch Me If You Can", cast: ["Leonardo Dicaprio", "Tom Hanks"] },
  { name: `You've Got Mail`, cast: ["Tom Hanks", "Meg Ryan"] },
  {
    name: "When Harry Met Sally",
    cast: ["Billy Crystal", "Meg Ryan", "Carrie Fisher"]
  },
  { name: "Hidden Figures", cast: ["Taraji P. Henson", "Octavia Spencer"] }
];

export const processData = (data) => {
  let actors = {};
  const movies = {};
  const accumulator = { actors, movies };

  data.forEach((movie, index) => {
    movie.cast.forEach((actor) => {
      if (!actors[actor]) {
        actors[actor] = {};
      }
      actors[actor][index] = movie.name;
    });
    movies[index] = movie.name;
  });
  console.log(accumulator);
  return accumulator;
};
