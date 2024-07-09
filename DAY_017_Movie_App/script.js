let API_URL = 'https://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc&api_key=8c2632ba76d81712645898dec38fe958&page=1'

let IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
let SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=8c2632ba76d81712645898dec38fe958&query="'

let main = document.getElementById('main')
let form = document.getElementById('form')
let search = document.getElementById('search')


//Get initial movie
getMovies(API_URL)

async function getMovies(url){
  let res = await fetch(url)
  let data = await res.json()

  showMovies(data.results)
}

function showMovies(movies){

  main.innerHTML = ''  //pour nettoyer le main parcequ'on ne veut pas y ajouter mais remplacer

  movies.forEach((movie) => {
    let {title, poster_path, vote_average,overview} = movie

    let movieEl = document.createElement('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">

        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)} ">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
    `
    main.appendChild(movieEl)
  });
}

function getClassByRate(vote){
  if(vote >= 8){
    return 'green'
  } else if(vote >= 5){
    return 'orange'
  } else {
    return 'red'
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault()

  let searchTerm = search.value

  if(searchTerm && searchTerm !== ''){
    getMovies(SEARCH_API + searchTerm)

    search.value = ''

  } else{

    window.location.reload()

  }

})