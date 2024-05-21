// Get the search button element
const searchButton = document.querySelector('.searchButton');

// Add an event listener to the search button
searchButton.addEventListener('click', function() {
  // Get the input value
  const searchInput = document.querySelector('.placeholder').value;

  // Clear the movies container
  const moviesContainer = document.querySelector('.moviesContainer');
  moviesContainer.innerHTML = '';

  // Make an API call to fetch movies based on the search input
  fetch(`https://api.example.com/movies?search=`)
    .then(response => response.json())
    .then(data => {
      // Iterate through the fetched movies and create movie cards
      data.forEach(movie => {
        const movieDetails = document.createElement('div');
        movieDetails.classList.add('movieDetails');

        const movieImage = document.createElement('img');
        movieImage.src = movie.image_url;
        movieImage.alt = movie.title;

        const movieTitle = document.createElement('h1');
        movieTitle.textContent = movie.title;

        const movieDescription = document.createElement('p');
        movieDescription.textContent = movie.description;

        const movieRating = document.createElement('div');
        movieRating.classList.add('rating');
        const ratingSpan = document.createElement('span');
        ratingSpan.textContent = `Rating: ${movie.rating}`;
        movieRating.appendChild(ratingSpan);

        const movieDirector = document.createElement('h2');
        movieDirector.textContent = 'Director';

        const directorP = document.createElement('p');
        directorP.textContent = movie.director;

        movieDetails.appendChild(movieImage);
        movieDetails.appendChild(movieTitle);
        movieDetails.appendChild(movieDescription);
        movieDetails.appendChild(movieRating);
        movieDetails.appendChild(movieDirector);
        movieDetails.appendChild(directorP);

        moviesContainer.appendChild(movieDetails);
      });
    })
    .catch(error => {
      console.error('Error fetching movies:', error);
    });

});

// Get the movie cards
const movieCards = document.querySelectorAll('.movie-card');

// Add an event listener to the search button
const searchButton = document.querySelector('.searchButton');
searchButton.addEventListener('click', function() {
    // Get the input value
    const searchInput = document.querySelector('.placeholder').value;

    // Clear the movies container
    const moviesContainer = document.querySelector('.moviesContainer');
    moviesContainer.innerHTML = '';

    // Make an API call to fetch movies based on the search input
    fetch(`https://api.example.com/movies?search=${searchInput}`)
        .then(response => response.json())
        .then(data => {
            // Iterate through the fetched movies and create movie cards
            data.forEach(movie => {
                const movieDetails = document.createElement('div');
                movieDetails.classList.add('movieDetails');

                const movieImage = document.createElement('img');
                movieImage.src = movie.image_url;
                movieImage.alt = movie.title;

                const movieTitle = document.createElement('h1');
                movieTitle.textContent = movie.title;

                const movieDescription = document.createElement('p');
                movieDescription.textContent = movie.description;

                const movieRating = document.createElement('div');
                movieRating.classList.add('rating');
                const ratingSpan = document.createElement('span');
                ratingSpan.textContent = `Rating: ${movie.rating}`;
                movieRating.appendChild(ratingSpan);

                const movieDirector = document.createElement('h2');
                movieDirector.textContent = 'Director';

                const directorP = document.createElement('p');
                directorP.textContent = movie.director;

                movieDetails.appendChild(movieImage);
                movieDetails.appendChild(movieTitle);
                movieDetails.appendChild(movieDescription);
                movieDetails.appendChild(movieRating);
                movieDetails.appendChild(movieDirector);
                movieDetails.appendChild(directorP);

                moviesContainer.appendChild(movieDetails);
            });

            // Add event listeners to the movie cards
            movieCards.forEach((card, index) => {
                card.addEventListener('click', function() {
                    // Remove the active class from all movie cards
                    movieCards.forEach(card => {
                        card.classList.remove('active');
                        card.classList.remove('prev');
                    });

                    // Add the active class to the clicked movie card
                    if (index === 0) {
                        card.classList.add('active');
                    } else if (index === movieCards.length - 1) {
                        card.classList.add('prev');
                    } else {
                        const prevCard = movieCards[index - 1];
                        const nextCard = movieCards[index + 1];

                        prevCard.classList.add('prev');
                        card.classList.add('active');
                        nextCard.classList.add('prev');
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error fetching movies:', error);
        });
    });