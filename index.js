// API 1: https://www.omdbapi.com/?apikey=be449a2a&s=cloud

const movieCardTemplate = document.querySelector("[data-movie-template]");

function createMovieCard(movie) {
  return `<div class="movie-card">
            <div class="movie-title">${movie.Title}</div>
            <div class="movie-year">${movie.Year}</div>
            <div class="movie-imdb">${movie.imdbID}</div>
            <div class="movie-poster"><img src="${movie.Poster}" alt="${movie.Poster}"></div>
          </div>`;
} 

async function loadMovieCards() {
  try {
    const searchValue = document.querySelector("input").value;
    const response = await fetch(`https://www.omdbapi.com/?apikey=be449a2a&s=${encodeURIComponent(searchValue)}`);
    const data = await response.json();
    const movies = data.Search;
    const container = document.getElementById('movie-cards-container');
    container.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
  } 
  catch (error) {
    console.error('Error loading movie cards:', error);
  }
}

