let input = document.getElementById("movie");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then(response => response.json())
    .then((data) => {
        let result = document.getElementById("result");
        result.innerHTML = '';  
        data.forEach(item => {
            let show = item.show;
            let showElement = document.createElement('div');
            showElement.classList.add('show');

            let title = document.createElement('h2');
            title.textContent = show.name;

            let image = document.createElement('img');
            image.src = show.image ? show.image.medium : 'placeholder.jpg';
            image.alt = show.name;

            let genres = document.createElement('p');
            genres.textContent = `Genres: ${show.genres.length ? show.genres.join(', ') : 'N/A'}`;

            let premiered = document.createElement('p');
            premiered.textContent = `Premiered: ${show.premiered ? show.premiered : 'N/A'}`;

            showElement.appendChild(title);
            showElement.appendChild(image);
            showElement.appendChild(genres);
            showElement.appendChild(premiered);
            result.appendChild(showElement);
        });
    })
    .catch(error => {
        console.log('Error:', error);
        let result = document.getElementById("result");
        result.innerHTML = `Error fetching movie data. Please try again.`;
    });
});

