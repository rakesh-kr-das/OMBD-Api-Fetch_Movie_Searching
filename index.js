// async function getMovies() {
//     try {
//         let movielist = document.getElementById('movie-list');
//         movielist.innerHTML = "";

//         let Search = document.getElementById("search").value;
//         let movies = await fetch(`https://www.omdbapi.com/?s=${Search}&apikey=8a0be62a`);
//         movies = await movies.json();
//         movies = movies.Search;

//         console.log(movies);

//         if (movies === undefined) {
//             movielist.innerHTML = "<h1>Oops, not found!</h1>";
//             return;
//         }



//         movies.map((movie) => {
//             movielist.innerHTML += `
//                 <div class="Card">
//                     <h3>${movie.Title}</h3>
//                   <img src="${movie.Poster === 'N/A' ? 'https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif?cid=6c09b952wfez8tsms6rembnjevizzy5tvd0mum1it69vsjlm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' : movie.Poster}">

//                     <h4>${movie.Year}</h4>
//                 </div>
//             `;
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }


async function getMovies() {
    try {
        let movielist = document.getElementById('movie-list');
        let loader = document.getElementById('loader');
        let search = document.getElementById("search").value;

        movielist.innerHTML = "";
        loader.style.display = "block"; // Show loader

        let movies = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=82b96a04`);

        movies = await movies.json();
        movies = movies.Search;

        loader.style.display = "none"; // Hide loader
        console.log(movies);

        if (movies === undefined) {
            movielist.innerHTML = "<h1>Oops, not found!</h1>";
            return;
        }

        movies.map((movie) => {
            movielist.innerHTML += `
                <div class="Card">
                    <h3>${movie.Title}</h3>
                      <img src="${movie.Poster === 'N/A' ? 'https://media4.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif?cid=6c09b952wfez8tsms6rembnjevizzy5tvd0mum1it69vsjlm&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' : movie.Poster}">
                    <h4>${movie.Year}</h4>
                </div>
            `;
        });
    } catch (err) {
        loader.style.display = "none"; 
        console.log(err);
    }
}

