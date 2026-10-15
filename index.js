// API 1: https://www.omdbapi.com/?apikey=be449a2a&s=cloud

let movies;

async function searchMovies(event) {
  const movies = await fetch (`https://www.omdbapi.com/?apikey=be449a2a&s=${event.target.value}`)
  const moviesData = await movies.json();
  const movieListEl = document.querySelector(".movie-list");

  movieListEl.innerHTML = moviesData
  .map(
    (user) => `<div class="movie-card">
      <div class="movie-card__container">
        <h3>Movie Name</h4>
          <p><b>Year</b></p>
          <p><b>IMDB</b></p>
      </div>
    </div>`
    )
    .join("");
  }

searchMovies();

