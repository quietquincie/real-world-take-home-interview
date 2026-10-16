// API 1: https://www.omdbapi.com/?apikey=be449a2a&s=cloud

let movies;

async function searchMovies(event) {
  const movies = await fetch (`https://www.omdbapi.com/?apikey=be449a2a&s=${event.target.value}`);
  const moviesData = await movies.json();
  console.log(
moviesData.map(
(movie) => `<div class="movie-card">
        <div class="movie-card__container">
          <h3>Movie Name</h4>
            <p><b>Year</b>1990</p>
            <p><b>IMDB</b> <a href="https://website.website" target="_blank">View on IMDB</a></p>
        </div>
      </div>`
    )
  );
  }

