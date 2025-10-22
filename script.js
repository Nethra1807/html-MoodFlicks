const movies = {
  Happy: [
    { name: "Paddington 2", image: "paddington2.jpg", trailer: "https://www.youtube.com/watch?v=52x5HJ9H8DM" },
    { name: "The Intouchables", image: "intouchables.jpg", trailer: "https://www.youtube.com/watch?v=34WIbmXkewU&t=2s" },
    { name: "Coco", image: "coco.jpeg", trailer: "https://www.youtube.com/watch?v=xlnPHQ3TLX8" }
  ],
  Sad: [
    { name: "The Pursuit of Happyness", image: "pursuit.jpeg", trailer: "https://www.youtube.com/watch?v=DMOBlEcRuw8" },
    { name: "A Star is Born", image: "astar.jpg", trailer: "https://www.youtube.com/watch?v=iPxGl3B2I4A" }
  ],
  Lazy: [
    { name: "Zootopia", image: "zootopia.jpg", trailer: "https://www.youtube.com/watch?v=jWM0ct-OLsM" },
    { name: "Shrek", image: "shrek.jpg", trailer: "https://www.youtube.com/watch?v=CwXOrWvPBPk" }
  ],
  Romantic: [
    { name: "The Notebook", image: "notebook.jpeg", trailer: "https://www.youtube.com/watch?v=BjJcYdEOI0k" },
    { name: "Pride & Prejudice", image: "pride.jpg", trailer: "https://www.youtube.com/watch?v=Ur_DIHs92NM" }
  ]
};

function showMovies(mood) {
  const movieDiv = document.getElementById("movies");
  movieDiv.innerHTML = "";

  movies[mood].forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.name}">
      <h3>${movie.name}</h3>
      <button onclick="window.open('${movie.trailer}','_blank')">Watch Trailer</button>
    `;
    movieDiv.appendChild(card);
  });
}

