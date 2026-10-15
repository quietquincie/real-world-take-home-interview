// API 1: https://www.omdbapi.com/?apikey=be449a2a&

let movies;

async function searchMovies(event) {
  const movies = await fetch(`https://www.omdbapi.com/?apikey=be449a2a&s=${event.target.value}`)
  const moviesData = await movies.json();
  console.log(moviesData);
}

