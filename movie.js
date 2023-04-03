const apiKey = "b4cdfba7";

async function getMovieInfo(title) {
    const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
    const data = await response.json();
    return data;
}

const form = document.querySelector('form');
const movieInfoDiv = document.querySelector('#movieInfo');

form.addEventListener('submit', async(e) => {
    e.preventDefault();
    const movieTitle = document.querySelector('#movieTitle').value;
    const movieData = await getMovieInfo(movieTitle);
    const Director = await getMovieInfo(movieTitle);
    const imdbRating = await getMovieInfo(movieTitle);
    const movieInfoHTML = `

    <h2>
        ${movieData.Title} (${movieData.Year}) (${movieData.Director}) (${movieData.imdbRating}) 
    </h2>
    <img src="${movieData.Poster}">
    <p>${movieData.Plot}</p>
  `;
    movieInfoDiv.innerHTML = movieInfoHTML;
});