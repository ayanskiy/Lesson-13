async function searchShows() {
    const query = document.getElementById('searchInput').value;
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const shows = await response.json();
    displayShows(shows);
    populateGenres(shows);
}

function displayShows(shows) {
    const showList = document.getElementById('showList');
    showList.innerHTML = '';
    shows.forEach(show => {
        const showElement = document.createElement('div');
        showElement.classList.add('card', 'm-3', 'col-5');
        showElement.innerHTML = `
            <img src="${show.show.image ? show.show.image.original : 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'}" class="card-img-top" alt="${show.show.name}">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Название: ${show.show.name}</li>
                    <li class="list-group-item">Жанры: ${show.show.genres.join(', ')}</li>
                    <li class="list-group-item">Рейтинг: ${show.show.rating.average || 'Бей рейтинга'}</li>
                </ul>
        `;
        showElement.addEventListener('click', () => {
            showElement.classList.toggle('active');
        });
        showList.appendChild(showElement);
    });
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    document.getElementById('showList').innerHTML = '';
    document.getElementById('genreSelect').innerHTML = '<option value="">Жанры</option>';
}

function populateGenres(shows) {
    const genreSelect = document.getElementById('genreSelect');
    const genres = new Set();
    shows.forEach(show => {
        show.show.genres.forEach(genre => genres.add(genre));
    });
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    });
}

function filterShows() {
    const selectedGenre = document.getElementById('genreSelect').value;
    const shows = document.querySelectorAll('.card');
    shows.forEach(show => {
        const genres = show.querySelector('.list-group-item:nth-child(2)').textContent.split(': ')[1].split(', ');
        if (selectedGenre === '' || genres.includes(selectedGenre)) {
            show.style.display = 'flex';
        } else {
            show.style.display = 'none';
        }
    });
}