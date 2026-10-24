// API 1: https://www.omdbapi.com/?apikey=be449a2a&s=cloud

let movies;

function openMenu() {
  document.body.classList += " menu--open";
}
function closeMenu() {
  document.body.classList.remove("menu--open");
}

const movieCardTemplate = document.querySelector("[data-movie-template]");

function createMovieCard(movie) {
  return `<div class="movie-card">
    <div class="movie-title">${movie.Title}</div>
    <div class="movie-year">Released: ${movie.Year}</div>
    <div class="movie-imdb">IMDB: ${movie.imdbID}</div>
    <div class="movie-poster"><img src="${movie.Poster}" alt="${movie.Poster}"></div>
  </div>`;
}

const moviesWrapper = document.querySelector(".movies");

async function loadMovieCards(
  filter = document.querySelector("#filter").value
) {
  moviesWrapper.classList.add("movies__loading");
  await new Promise((resolve) => setTimeout(resolve, 500));
  try {
    const searchValue = document.querySelector("input").value;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=be449a2a&s=${encodeURIComponent(searchValue)}`,
    );
    const data = await response.json();
    const movies = data.Search || [];
    if (filter === "OLD_TO_NEW") {
      movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    } else if (filter === "NEW_TO_OLD") {
      movies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year)); 
    } else if (filter === "ELPHABATIZE") {
      movies.sort((a, b) => a.Title.localeCompare(b.Title)); 
    } 
    const container = document.getElementById("movie-cards-container");
    container.innerHTML =
      (movies ||[])
        .map((movie) => createMovieCard(movie))
        .join("");
  } catch (error) {
    console.error("Error loading movie cards:", error);
  } finally {
    moviesWrapper.classList.remove("movies__loading");
  }
}

function filterMovies(event) {
     loadMovieCards(event.target.value);
}