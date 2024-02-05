const express = require('express');
const cors = require('cors');
const fs = require('fs');

require('dotenv').config();


const app = express();

// CORS for recieving client request
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

// read data from the file
const moviesDataRaw = fs.readFileSync('./movies.json', 'utf-8');

// for pagination
const ITEMS_PER_PAGE = 10;

const moviesData = JSON.parse(moviesDataRaw);

app.get('/movies', (req, res) => {

  // Get the search query from the query parameters
  const searchQuery = req.query.search || '';
  const searchQueryLowerCase = searchQuery.toLowerCase();
  console.log(searchQuery);

  // Get the genre parameter from the query
  const genreParam = req.query.genre || '';
  const genres = genreParam.split(',').map(genre => genre.toLowerCase());
  console.log(genres);

  // Filter movies based on the search query
  const filteredMovies = moviesData.filter(movie =>{
    
    const titleLowerCase = String(movie.Title).toLowerCase();
    // console.log(titleLowerCase);

    const movieHasGenres = genres.length === 0 || genres.every(genre => movie.Genre.toLowerCase().includes(genre));

    return titleLowerCase.indexOf(searchQueryLowerCase) !== -1 && movieHasGenres;
  }
  );

  const page = parseInt(req.query.page) || 1;

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Extract the movies for the current page
  const moviesForPage = filteredMovies.slice(startIndex, endIndex);

  // return data from file
  res.json({
    currentPage: page,
    totalPages: Math.ceil(filteredMovies.length / ITEMS_PER_PAGE),
    movies: moviesForPage,
  });
})

if (require.main === module) {
  app.listen(3030, () => console.log('Movies server listening on port 3030!'))
}