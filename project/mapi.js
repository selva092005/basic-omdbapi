let api = 'http://www.omdbapi.com/?apikey=61e576a4&t='

// promises

let title = document.getElementById('title');
let desc = document.getElementById('desc');
let date = document.getElementById('date');
let actors = document.getElementById('actors');
let direactors = document.getElementById('direactors');
let ratings = document.getElementById('ratings');
// let poster = document.getElementById('card');
// let poo = document.getElementById('h');
let picture = document.getElementById('pic')
let flex=document.getElementById("flex")


function searchmovie(){  
    let query  = document.getElementById('moviename');
    let finalApi = api + query.value
    fetch(finalApi).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
        title.innerText = data.Title;
        desc.innerText = data.Plot;
        date.innerText = "Date : " + data.Released;
        actors.innerText ="Actors : " + data.Actors;
        direactors.innerText ="Director : " +data.Director;
        ratings.innerText ="IMDb : "+data.imdbRating;   
        awards.innerText="Awards : "+data.Awards;
        country.innerText="Country : "+data.Country;
        genre.innerText="genre : "+data.Genre;
        lang.innerText="Language : "+data.Language;
        rate.innerText="Rate : "+data.Rated;
        res.innerText="Response : "+data.Response;
        run.innerText="Runtime : "+data.Runtime;
        type.innerText="Type : "+data.Type;
        writer.innerText="Writer : "+data.Writer;
        year.innerText="Year : "+data.Year;
        picture.src = data.Poster;
        // poo.remove()
        flex.remove();
        // cards.forEach(card => card.remove());

        // poo.innerHTML=data.Title;
    })
}